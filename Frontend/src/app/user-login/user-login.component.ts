import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../User'
import { Router } from '@angular/router';
import { Login } from '../Login'


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLoginForm: FormGroup;
  exist: boolean = false;
  name: String = "";
  userList: User;
  invalid: boolean = false;
  logindetails: Login;

  constructor(private fb: FormBuilder, private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



  showPopup1:boolean = false;
  showPopup2:boolean= false;

  onLogin() {
    this.logindetails = new Login(this.userLoginForm.controls.username.value,
      this.userLoginForm.controls.password.value);

    this.service.loginUser(this.logindetails).subscribe(res => {
      if (res.status == 200) {

        console.log("SUCCESS", res.status)
        localStorage.setItem('loginEmail', this.userLoginForm.controls.username.value);
        this.router.navigate(['/']).then(()=>{window.location.reload()})
        
      
      }
    },
      err => {
        if (err.status == 200) {
          console.log("error false", err.status)
          localStorage.setItem('loginEmail', this.userLoginForm.controls.username.value);
          this.service.getUserByEmail().subscribe(data => {
            this.userList = data;
            localStorage.setItem("loginName", this.userList.name);
            this.showPopup1 = true;
          });

        }
        else {
          this.invalid = true;
         this.showPopup2 = true;
         
        }


      })

    }
removePop1(){
  this.showPopup1 = false;
  this.router.navigate(['userDashboard']).then(()=>{window.location.reload()})


}

removePop2(){

  this.showPopup2=false;
  setTimeout(function () {
    window.location.href = 'user-login';
  }, 400);

}

}


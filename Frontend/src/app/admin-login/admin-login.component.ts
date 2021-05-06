import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { Login } from '../Login';
import { UserService } from '../user.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  adminLoginForm: FormGroup;
  logindetails: Login;
  adminDetails: Admin;
  invalid: boolean = false;


  constructor(private fb: FormBuilder, private router: Router, private service: UserService) { }

  ngOnInit(): void {

    this.adminLoginForm = this.fb.group({
      adminUsername: ['', Validators.required],
      adminPassword: ['', Validators.required]
    });


  }


  showPopup1:boolean = false;
  showPopup2:boolean= false;

  adminLogin() {
    this.logindetails = new Login(this.adminLoginForm.controls.adminUsername.value,
      this.adminLoginForm.controls.adminPassword.value);

    this.service.loginAdmin(this.logindetails).subscribe(res => {
      if (res.status == 200) {

       
        localStorage.setItem('loginEmail', this.adminLoginForm.controls.adminUsername.value);
      
      }
    },
      err => {
        if (err.status == 200) {
          console.log("error false", err.status)
          localStorage.setItem('loginEmail', this.adminLoginForm.controls.adminUsername.value);

          this.service.getAdminByEmail().subscribe(data => {
            this.adminDetails = data;
          
            localStorage.setItem("loginName", this.adminDetails.name);
            this.showPopup1 = true;
          });
          // this.router.navigate(['adminDashboard']).then(()=>{window.location.reload()})

        }
        else {
          this.invalid = true;
          this.showPopup2 = true;
   
        }


      })
  }
removePop1(){
  this.showPopup1 = false;
  this.router.navigate(['adminDashboard']).then(()=>{window.location.reload()})


}

removePop2(){

  this.showPopup2=false;
  setTimeout(function () {
    window.location.href = 'admin-login';
  }, 400);

}



}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../User'
import { UserValidationService } from '../user-validation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 registerForm:FormGroup;
users:User[];

  success:boolean =false;
  fail:boolean = false;
  constructor(private fb: FormBuilder ,private router:Router , private service:UserService,private uservalidate:UserValidationService) { }


  
  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName:['',Validators.required],
      age:['',[Validators.required,this.uservalidate.agerange(23,50)]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',Validators.compose([Validators.required,this.uservalidate.patternValidator()])],
      rePassword:['',Validators.required],
      mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender:['',Validators.required],
     },
     {
       validator: this.uservalidate.MatchPassword('password', 'rePassword'),
     }
     );


    this.service.getAllUsers().subscribe(data=>{
      this.users = data;


     
    });


  }

showPopup1:boolean =false;
showPopup2:boolean =false;

onRegister() {
  let u: User = new User(this.registerForm.controls.email.value, this.registerForm.controls.firstName.value,
    this.registerForm.controls.gender.value, this.registerForm.controls.mobile.value,
    this.registerForm.controls.age.value, this.registerForm.controls.password.value);

  this.service.addUser(u).subscribe(u => {
    if (u.status == "SUCCESS") {
     this.showPopup1 = true;
      // setTimeout(function () {
      //   window.location.href = 'app-login';
      // }, 200);
    }
    else {
     this.showPopup2=true;
      // setTimeout(function () {
      //   window.location.href = 'register';
      // }, 200);
    }
  })
}


  removePop1(){
    this.registerForm.reset();
    this.success=true;
    this.fail = false;
    this.showPopup1 = false;
  
  
  }

  removePop2(){
    this.registerForm.reset();
    this.fail = true;
    this.success = false;
    this.showPopup2=false;

  }


}

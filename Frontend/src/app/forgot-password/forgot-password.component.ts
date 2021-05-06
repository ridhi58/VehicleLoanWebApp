import { ForgotService} from './../forgot.service';
import { Router } from '@angular/router';
import { User } from './../User';
import { UserService } from './../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserValidationService } from '../user-validation.service';
import { IoT1ClickDevicesService } from 'aws-sdk/clients/all';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  otpForm:FormGroup;
  passForm:FormGroup;
  forgotPasswordForm:FormGroup;
  users:User[];
  exist:boolean = false; 
  name:String ="";
  show:boolean= false;
  button1:boolean=true;
  otp:any;
  show1:boolean=false;


  constructor(private fb: FormBuilder ,private service:UserService, private router:Router, private otpservice:ForgotService , private uservalidate:UserValidationService) { }

  ngOnInit(): void {this.forgotPasswordForm = this.fb.group({
    email:['',Validators.email]  
    
   });
   this.otpForm = this.fb.group({
     OTP:['']
   });
   this.passForm=this.fb.group({
     pass:['',Validators.compose([Validators.required,this.uservalidate.patternValidator()])],
     repass:['',Validators.required]
   },
   {
    validator: this.uservalidate.MatchPassword('pass', 'repass'),
  })
   this.service.getAllUsers().subscribe(data=>{
    this.users = data;
  });
  }

 
regUser:User;
showPopup1:boolean = false;
message:string = null;
  onSubmit()
  {  


   
    let email:String  = this.forgotPasswordForm.controls.email.value;
    for(let u1 of this.users)
    {
      if(email==u1.email){
        this.show=true;
       this.regUser= u1;
        sessionStorage.setItem("email",u1.email);
      }
   }
   if(this.show==false){
     
    
     this.message = "Sorry! you are not a registered user."
     this.showPopup1 = true;
     
   }
   else{
      this.show;
      this.button1=false;
      this.showPopup1 = false;
   }

   this.otpservice.getOtp().subscribe(data =>{
    this.otp = data;
  })
   
  }

  otpSubmit(){

   
 


     let email:String = this.forgotPasswordForm.controls.email.value;
   
    if(this.otp == this.otpForm.controls.OTP.value){
       this.show1=true;
       this.show=false;
       this.button1=false;
       this.showPopup1 = false;
      

    }
    else{
    this.showPopup1 = true;
    this.message = "Please enter correct OTP"
    }
  }

  pass1:User[];
showPopup2:boolean = false;

  passSubmit(){

    let userForgot = new User(this.regUser.email , this.regUser.name,this.regUser.gender,this.regUser.mobile,this.regUser.age,this.passForm.controls.pass.value)
    this.otpservice.putPass(userForgot).subscribe(data=>{
      this.pass1.push(userForgot);
    })
   this.showPopup2=true;
 
  
 
    
  }

 removePop2()
  {
    this.showPopup2 = false;
    this.router.navigate(['/app-login'])
  }
}

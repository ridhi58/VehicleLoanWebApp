import { Component, OnInit } from '@angular/core';
import { ApprovedService } from '../approved.service';
import { EMI } from '../EMI';
import { LoanApplicationService } from '../loan-application.service';
import { LoanApplication } from '../LoanApplication';
import { User } from '../User';
import { UserApplyService } from '../user-apply.service';
import { UserService } from '../user.service';
import { UserApply } from '../UserApply';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor( private fb:FormBuilder, private loanapp: LoanApplicationService, private userService: UserService, private approved: ApprovedService,private userdetails:UserApplyService) { }

  loan: LoanApplication[];
  user1: User;
  userdetails1:UserApply;
  show1: boolean = true;
  show2: boolean = false;
  show3: boolean = false;
  isClicked:boolean = false;
  isClicked2 = false;
  isClicked3 = false;
  editButton:boolean = false;
  showPopup1:boolean = false;

  applicationDetails = false;
 


  edit:FormGroup;

  
  ngOnInit(): void {

  


    if (localStorage.getItem("loginEmail") != null) {
    
      this.loanapp.getAllLoanApplicationG().subscribe(data => {
        this.loan = data;
      })
    }
    this.userService.getUserByEmail().subscribe(data => { this.user1 = data })
    this.userdetails.getApplyUsersDetails().subscribe(data =>{
      this.userdetails1 = data;
    })
    
 
  
   
  }

  click1() {
    this.show1 = true;
    this.show2 = false;
    this.show3 = false;
    this.isClicked = true;
    this.isClicked2 = false;
    this.isClicked3 = false;
  
  }

  click2() {
    this.edit = this.fb.group({  
      address:[this.user1.userdetails.address,Validators.required],
      city:[this.user1.userdetails.city,Validators.required],
      state:[this.user1.userdetails.state,Validators.required],
      pin:[this.user1.userdetails.pin,Validators.required],
      salary:[this.user1.userdetails.salary,Validators.required],
      empType:[this.user1.userdetails.emptype,Validators.required],
    
      
    });


    this.show1 = false;
    this.show2 = true;
    this.show3 = false;
    this.isClicked2 =true;
    this.isClicked = false;
    this.isClicked3 = false;

  }

  click3() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = true;
    this.isClicked = false;
    this.isClicked2 = false;
    this.isClicked3 = true;
    

   console.log(this.loan)
  }

  closepop1(){
  this.showPopup1= false;

  }
closepop2()
{
  this.showPopup2= false;
}

a;
b;
c;
d;

 
  showPopup2:boolean = false;
  noPopup(a,b,c,d){
   this.showPopup2= true;
this.a = a;
this.b = b;
this.c = c;
this.d = d;
  
  }

  

  emiView: boolean = false;
  emiTable: EMI[];

  emiDetails(loanId) {
    this.showPopup1 = true;
    
    this.approved.getEmiDetailsById(loanId).subscribe(data => {
      this.emiTable = data;
    })
  }

  editDetails(){
    this.editButton = true;
    this.edit.reset();

    
    
  }
  editSubmit(){
    this.editButton = false;

  }

}

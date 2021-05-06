import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User'
import { LoanApplicationService } from '../loan-application.service';
import { LoanApplication } from '../LoanApplication';
import { UserApply } from '../UserApply';
import { UserApplyService } from '../user-apply.service';
import { ApprovedService } from '../approved.service'
import { Approved } from '../Approved';
import { EMI } from '../EMI';
import { Account } from '../Account';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  users: User[];
  loanUser: LoanApplication[];
  view: boolean = false;
  applyChasis: string;
  approvedUsers: User[];
  rejectedUsers: User[];
  viewApproved: boolean = false;
  viewRejected: boolean = false;
  viewBasic:boolean = false;

  constructor(private service: UserService, private loanService: LoanApplicationService, private details: UserApplyService
    , private approveService: ApprovedService , private router:Router) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(data => {
      this.users = data;
    });
    this.approveService.getApprovedUser().subscribe(data => {
      this.approvedUsers = data;
    });
    this.approveService.getRejectedUser().subscribe(data => {
      this.rejectedUsers = data;
    })

  }
  displayDetails: User;
  d: UserApply;
  loanDetails: LoanApplication;
  b;

  gender:string;
  age;
  mobile;
  viewForm(u ) {
   
    this.view = true;
    this.displayDetails = u;
    localStorage.setItem("userEmail", this.displayDetails.email);

    this.loanService.getAllLoanApplication().subscribe(data => {
      this.loanUser = data;
    });
    this.details.getApplyUsers().subscribe(data => {
      this.d = data;
    })
  }


  viewBasicDetails(mail,gender, age, mobile){
    this.mobile = mobile;
    this.gender =gender;
    this.age = age;
    this.viewBasic= true;
    this.details.getApplyUsersDetailsByEmail(mail).subscribe(data=>{
      this.b = data;
    })

  }

  close() {
    this.view = false;
    localStorage.removeItem("userEmail");
  }

  closeApprove() {
    this.viewApproved = false;
    localStorage.removeItem("emailApproved");
  }

  closeReject() {
    this.viewRejected = false;
    localStorage.removeItem("emailApproved");
  }
  closeBasic()
  {
    this.viewBasic = false;
  }


  approveDetails: Approved[];

 
  accept(chasis) {
    
    this.applyChasis = chasis;
    sessionStorage.setItem("acceptChasis", this.applyChasis);
    let u1: Approved = new Approved();
  
    this.approveService.addApprovedUser(u1).subscribe(data => this.approveDetails.push(u1));
 
    window.location.href = 'adminDashboard';
   
     



  }

  rejectDetails: LoanApplication;
  reject(rejectDetails: LoanApplication) {
    this.approveService.addRejectedUser(rejectDetails).subscribe(data => { });
    window.location.href = 'adminDashboard';

  }


  list1Show: boolean = true;
  list2Show: boolean = false;
  list3Show: boolean = false;
  list4Show: boolean = false;

  list1() {
    this.list1Show = true;
    this.list2Show = false;
    this.list3Show = false;
  }
  list2() {

    this.list1Show = false;
    this.list2Show = true;
    this.list3Show = false;

  }

  list3() {
    this.list1Show = false;
    this.list2Show = false;
    this.list3Show = true;

  }
  list4() {

  }

  approveDetailsByemail: Approved[];
  account: Account;
  showApprovedButton(email) {
    this.viewApproved = true;
    localStorage.setItem("emailApproved", email);
    this.approveService.getApprovedUserbyEmail().subscribe(data => {
      this.approveDetailsByemail = data;
    });
    this.approveService.getAccountByEmail().subscribe(data => {
      this.account = data;
    })
  }

  rejectedDetailsByEmail: LoanApplication[]
  showRejectedButton(email) {
    this.viewRejected = true;
    localStorage.setItem("emailApproved", email);
    this.approveService.getRejectedUserByEmail().subscribe(data => {
      this.rejectedDetailsByEmail = data;
    })
  }

  emiView: boolean = false;
  emiTable: EMI[];
  emiDetails(loanId) {
    this.emiView = !this.emiView;
    this.approveService.getEmiDetailsById(loanId).subscribe(data => {
      this.emiTable = data;
    })
  }
}

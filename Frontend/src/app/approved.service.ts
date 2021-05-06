import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Approved } from './Approved'
import { User } from './User';
import { EMI } from './EMI'
import { LoanApplication } from './LoanApplication';
import { Account } from './Account';

@Injectable({
  providedIn: 'root'
})
export class ApprovedService {

  constructor(private http: HttpClient) { }

  // After Approving the Admin will Add it to Approved Loans 
  addApprovedUser(user: Approved): Observable<Object> {
    return this.http.post("http://localhost:9091/VehicleLoanApp/users/Admin/Approve" + '/' + localStorage.getItem("userEmail") + '/' + sessionStorage.getItem("acceptChasis"), user);
  }

  // Retrieving Approved Loan Applications By Email
  getApprovedUserbyEmail(): Observable<Approved[]> {
    return this.http.get<Approved[]>("http://localhost:9091/VehicleLoanApp/users/ApprovedLoanDetails" + '/' + localStorage.getItem("emailApproved"));
  }

  // Retrieving Rejected Loan Applications By Email
  getRejectedUserByEmail(): Observable<LoanApplication[]> {
    return this.http.get<LoanApplication[]>("http://localhost:9091/VehicleLoanApp/users/RejectedLoanDetails/" + localStorage.getItem("emailApproved"))
  }

  // Retrieving Approved Users
  getApprovedUser(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:9091/VehicleLoanApp/users/ViewApprovedUsers")
  }

  // EMI List Details of the Approved Loan 
  getEmiDetailsById(id): Observable<EMI[]> {
    return this.http.get<EMI[]>("http://localhost:9091/VehicleLoanApp/users/Approved/EMIList/" + id)
  }

  // Rejecting A Loan Application
  addRejectedUser(loanapp: LoanApplication) {
    return this.http.put("http://localhost:9091/VehicleLoanApp/users/Admin/Reject" + '/' + localStorage.getItem("userEmail"), loanapp);
  }

  // Retrieving Rejected Users
  getRejectedUser(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:9091/VehicleLoanApp/users/ViewRejectedUsers");
  }

  //Retrieving Account Details By Email
  getAccountByEmail(): Observable<Account> {
    return this.http.get<Account>("http://localhost:9091/VehicleLoanApp/users/ViewAccount/" + localStorage.getItem("emailApproved"))
  }

  getApprovedDetails(): Observable<Approved[]> {
    return this.http.get<Approved[]>("http://localhost:9091/VehicleLoanApp/users/ApprovedLoanDetails/" + localStorage.getItem("loginEmail"));
  }

}

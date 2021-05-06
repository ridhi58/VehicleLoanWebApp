import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanApplication } from './LoanApplication';
import { UserApply } from './UserApply';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  constructor(private http:HttpClient ) 
  {
    
  }
 
  

  addLoanApplication(loan:LoanApplication):Observable<any>{
   
   return this.http.post("http://localhost:9091/VehicleLoanApp/users/ApplyLoanDetails" + '/' + localStorage.getItem("loginEmail") , loan);
  }
  getAllLoanApplication():Observable<LoanApplication[]>{
    return this.http.get<LoanApplication[]>("http://localhost:9091/VehicleLoanApp/users/LoanApplicationDetails/"+localStorage.getItem("userEmail"));
  }

  getAllLoanApplicationG():Observable<LoanApplication[]>{
    return this.http.get<LoanApplication[]>("http://localhost:9091/VehicleLoanApp/users/LoanApplicationDetails/"+localStorage.getItem("loginEmail"));
  }

  


}

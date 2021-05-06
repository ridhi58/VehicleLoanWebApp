import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UserApply} from './UserApply';

@Injectable({
  providedIn: 'root'
})
export class UserApplyService {

  constructor(private http:HttpClient) { }

 
 
   getApplyUsers():Observable<UserApply>{
     return this.http.get<UserApply>("http://localhost:9091/VehicleLoanApp/users/ViewUserDetails/"+localStorage.getItem("userEmail")); 
   }

   getApplyUsersDetails():Observable<UserApply>{
    return this.http.get<UserApply>("http://localhost:9091/VehicleLoanApp/users/ViewUserDetails/"+localStorage.getItem("loginEmail")); 
  }
  getApplyUsersDetailsByEmail(mail):Observable<UserApply>{
   
    return this.http.get<UserApply>("http://localhost:9091/VehicleLoanApp/users/ViewUserDetails/"+mail); 
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private http:HttpClient ) {}
  getOtp(){
    
    return this.http.get("http://localhost:9091/VehicleLoanApp/users/ForgotPassword/GetOtp/"+sessionStorage.getItem("email"));
 }
putPass(u:User){
   return this.http.put("http://localhost:9091/VehicleLoanApp/users/ResetPassword/"+sessionStorage.getItem("email"),u);
 }
}

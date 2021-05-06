import { EventEmitter, Injectable } from '@angular/core';
import { User } from './User'
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './Login';
import { Admin } from './Admin';
import { Config } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  // Registering the User in the Database
  addUser(user: User): Observable<any> {
    return this.http.post("http://localhost:9091/VehicleLoanApp/users/RegisterUser", user);
  }

  // Retrieving all the users from the database
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:9091/VehicleLoanApp/users/Admin/");
  }

  // Login Functionality for the User
  loginUser(login: Login): Observable<HttpResponse<Config>> {
    return this.http.post<Config>("http://localhost:9091/VehicleLoanApp/users/login/user", login, { observe: 'response' });
  }

  // Retrieving User By Email ID
  getUserByEmail(): Observable<User> {
    return this.http.get<User>("http://localhost:9091/VehicleLoanApp/users/ViewUserRegistrationDetails/" + localStorage.getItem("loginEmail"));
  }

  // Login Functionality for the Admin
  loginAdmin(login:Login):Observable<HttpResponse<Config>>{
    return this.http.post<Config>("http://localhost:9091/VehicleLoanApp/users/login/admin", login, { observe: 'response' });
  }

  // Retrieving Admin By Email ID
  getAdminByEmail():Observable<Admin>{
    return this.http.get<Admin>("http://localhost:9091/VehicleLoanApp/users/ViewAdminRegistrationDetails/" + localStorage.getItem("loginEmail"));
  }
}

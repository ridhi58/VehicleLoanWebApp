import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { HostListener } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  scrollHead = false;
  showDrop: boolean = false;
  list: boolean = false;
  showLogin = true;
  link = "user-login";

  // @HostListener("document:scroll")
  // scrollFunction() {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     this.scrollHead = true;
  //   }
  //   else {
  //     this.scrollHead = false;
  //   }
  // }


  constructor(public service: UserService, private router: Router) { }

  name: String = "Login";
  namegiven:boolean=false;


  ngOnInit(): void {
    if (localStorage.getItem("loginName") != null) {
      this.name = localStorage.getItem("loginName");
      this.showDrop = true;
      this.showLogin = false;
      this.link = "apply-loan"; 
    }
  }

  loginList() {
    this.list = !this.list;
  }

  loginClick(){
    if(localStorage.getItem("loginName")==null)
    {
        this.router.navigate(['app-login']);
    }
    
  }

  Dashboard() {
    if (localStorage.getItem("loginName") == "ADMIN") {
      this.router.navigate(['adminDashboard']);
    }
    else {
      this.router.navigate(['userDashboard']);
    }
    this.list = !this.list;

  }

  logOut() {
    localStorage.removeItem("loginName");
    localStorage.removeItem("loginEmail");
    localStorage.removeItem("emailApproved");
    localStorage.removeItem("userEmail");
    this.showLogin = true;
    this.showDrop = false;

    localStorage.clear;
    setTimeout(function () {
      window.location.href = 'app-login';
    }, 1000);
  }

}

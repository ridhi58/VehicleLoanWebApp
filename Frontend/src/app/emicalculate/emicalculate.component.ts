import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emicalculate',
  templateUrl: './emicalculate.component.html',
  styleUrls: ['./emicalculate.component.css']
})
export class EMIcalculateComponent implements OnInit {

amount:number=300000;
tenure:number =2;
interest:number=11;
emi:number=0;
totalinterest:number=0;
total:number=0;
show:boolean = false;

  valueChanged1(e) {
    this.amount = e;
    
}

valueChanged2(e) {
  this.tenure = e;
}

valueChanged3(e) {
  this.interest = e;
}

calculate()
{
  let interestby = this.interest/100;
 let monthlyRate:number = interestby/12;
 let terminmonths:number=this.tenure*12;
 this.emi = Number(((this.amount*monthlyRate)/(1-Math.pow(1+monthlyRate,-terminmonths))).toFixed(1));
 this.totalinterest = Number((terminmonths*this.emi - this.amount).toFixed(1));
 this.total = Number(((this.totalinterest)+Number(this.amount)).toFixed(1));
  this.show = true;
}


  constructor() { }
  link = "user-login";

  ngOnInit(): void {
    if (localStorage.getItem("loginName") != null) {

    
      this.link = "apply-loan";
    }
  }

  


}

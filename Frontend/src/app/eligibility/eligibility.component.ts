import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent {
  eligible: boolean=false;
  stats:string;
  onRoadPrice:number;
  annualSalary:number;
  existingEMI:number;
  loanTenure:number;

  checkeligiblity()
  {
    if (((this.onRoadPrice/this.loanTenure)+this.existingEMI)<(this.annualSalary/12))
    {
      if(this.eligible==false)
      {
        this.eligible=true;
        this.stats="CONGRATULATIONS, You Are Eligible For the Loan!";
        alert(this.stats);
      }
    }
    else
    {
      this.stats="SORRY, You Are Not Eligible For the Loan!";
      alert(this.stats);
      window.location.reload();
    }
  }

}
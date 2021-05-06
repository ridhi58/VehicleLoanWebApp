import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserValidationService {

  loanAmountValidator():ValidatorFn{
    return (formGroup:FormGroup) => {
      const amount = formGroup.get('loanAmount');
      const interest = formGroup.get('interest');

      if(amount.value>=100000 && amount.value<1000000)
      {
        if(interest.value!=13)
        {
          formGroup.get('interest').setValue(13);
          return {'allowedInterest':true};
        }
        else
        return null;
      }
      else if(amount.value>=1000000 && amount.value<2500000)
      {
        if(interest.value!=14)
        {
          formGroup.get('interest').setValue(14);
          return {'allowedInterest':true};
        }
        else
        return null;
      }
      else if(amount.value>=2500000){
        if(interest.value!=15)
        {
          formGroup.get('interest').setValue(15);
          return {'allowedInterest':true};
        }
        else
        return null;
      }
    }
  }

  emivalidator(monthlySalary:Number):ValidatorFn{
    return(formGroup:FormGroup) => {
      const emi = formGroup.get('emi');
      const amount = formGroup.get('loanAmount');
      const tenure = formGroup.get('loanTenure');
      const interest = formGroup.get('interest');

      let interestby:number = interest.value/100;
      let monthlyRate:number = interestby/12;
      let terminmonths:number=tenure.value*12;
      let currentEmi = Number(((amount.value*monthlyRate)/(1-Math.pow(1+monthlyRate,-terminmonths))).toFixed(1));

      if((currentEmi+emi.value)>Number(monthlySalary))
      {
      return {'allowedEmi':true};
      }

      return null;

      }
  }

  agerange(min:number,max:number): ValidatorFn
{
  return (control:AbstractControl):{[key:string]:boolean}|null =>
  {
    if(control.value!=undefined && (isNaN(control.value) || control.value<min || control.value>max))
    {
      return {'ageRange':true};
    }
    return null;
  };
}
  
  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  // userNameValidator(userControl: AbstractControl) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       if (this.validateUserName(userControl.value)) {
  //         resolve({ userNameNotAvailable: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1000);
  //   });
  // }

}
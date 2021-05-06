import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../user.service';
import{LoanApplicationService} from '../loan-application.service'

import {User} from '../User'
import { UserApplyService } from '../user-apply.service';
import { UserApply } from '../UserApply';
import{LoanApplication} from '../LoanApplication'
import { Approved } from '../Approved';
import { ApprovedService } from '../approved.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserValidationService } from '../user-validation.service';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpResponse } from '@angular/common/http';
import {UploadService} from '../../app/services/upload.service';


@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {
  step1:boolean=true;
  step2:boolean = false;
  step3:boolean = false;
  step4:boolean = false;
  check1:boolean = false;
  check2:boolean = false;
  check3:boolean = false;
  check4:boolean = false;
  show1:String = 'hidden';
  show2:String = 'hidden';
  show3:String = 'hidden';

  monthlySalary:Number;

showPopup4:boolean = false;


checkDuplicate:LoanApplication[];
  onStep1(){
  
    this.step1 = false;
    this.step2 = true;
    this.check1 = true;
    this.show1 = 'visible';
 

 for(let d of this.checkDuplicate)
 {
   if(d.status=="PENDING")
   {
     
     this.showPopup4 =true;
    
   }
 }
    
  }

  removePop4(){
this.showPopup4=false;
this.router.navigate(['/'])

  }

  onStep2Prev()

  {
    this.step1 = true;
    this.step2 = false;
   
  }
  onStep3()
  {
    this.step3 = false;
    this.step4 = true;
    this.check3 = true;
    this.show3 = 'visible';
  }
  onStep3Prev()
  {
    this.step2 = true;
    this.step3 = false; 
  }

  onStep4Prev()
  {
    this.step3 = true;
    this.step4=false;
    
  }
  applyForm:FormGroup
  documentDetails:FormGroup
  vehicleDetails:FormGroup
  loanDetails:FormGroup

  loggedUser: User;
  loggedUserApply: UserApply;
  approved:Approved[];
  totalExistingEmi=0;


  constructor(private uservalidate:UserValidationService,
     private fb: FormBuilder ,private router:Router,
      private applyService: UserApplyService ,
       private service:UserService , 
       private loanService:LoanApplicationService,
        private appservice:ApprovedService,
        private http:HttpClient,
       private uploadService:UploadService) { }

  ngOnInit(): void {
    this.loanService.getAllLoanApplicationG().subscribe(data=>this.checkDuplicate = data);

    this.service.getUserByEmail().subscribe(data => {
      this.loggedUser = data;
      this.filename = this.loggedUser.mobile;
      this.applyForm.controls.first.setValue(this.loggedUser.name)
      this.applyForm.controls.email.setValue(this.loggedUser.email)
      this.applyForm.controls.mobile.setValue(this.loggedUser.mobile)
    });

    this.applyService.getApplyUsersDetails().subscribe(data=>{
      this.loggedUserApply = data;
      this.applyForm.controls.address.setValue(this.loggedUserApply.address);
      this.applyForm.controls.city.setValue(this.loggedUserApply.city);
      this.applyForm.controls.state.setValue(this.loggedUserApply.state);
      this.applyForm.controls.pin.setValue(this.loggedUserApply.pin);
      this.applyForm.controls.city.setValue(this.loggedUserApply.city);
      this.applyForm.controls.annual.setValue(this.loggedUserApply.salary);
      this.applyForm.controls.empType.setValue(this.loggedUserApply.emptype);


      if(this.loggedUser!=null)
      {
        this.step1 = false;
        this.step2 = false;
        this.step3 = true;
        this.check1= true;
        this.check2=true;
        this.show1= "visible";
        this.show2= "visible";

      }
      
      this.monthlySalary = Number(this.loggedUserApply.salary)/12;

      this.appservice.getApprovedDetails().subscribe(data=>{
        this.approved = data;
        for(let i of this.approved)
        {
          this.totalExistingEmi+=i.emi;
        }
        this.loanDetails.controls.emi.setValue(this.totalExistingEmi);
      });

      this.loanDetails = this.fb.group({
        emi:['',Validators.required],
        loanAmount:['',[Validators.required,Validators.min(100000)]],
        loanTenure:['',Validators.required],
        interest:['',Validators.required],
     },
     {
       validators:[this.uservalidate.emivalidator(this.monthlySalary),this.uservalidate.loanAmountValidator()]
     })
    }) 
    
    this.applyForm = this.fb.group({  
      first:[''],
      last:[''],
      email:[''],
      mobile:[''],
    
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pin:['',Validators.required],
      annual:['',Validators.required],
      empType:['',Validators.required],
      
    })
    this.documentDetails = this.fb.group({
      aadhar:['',Validators.required],
      pan:['',Validators.required],
      addressProof:['',Validators.required],
      salary:['',Validators.required],

    })

    this.vehicleDetails = this.fb.group({
      chasis:['',[Validators.required,Validators.pattern("[A-HJ-NPR-Z0-9]{17}")]],
      brand:['',Validators.required],
      model:['',Validators.required],
      exPrice:['',Validators.required],
      type:['',Validators.required],
      onRoad:['',Validators.required],
      color:['',Validators.required]
    
    })

    this.loanDetails = this.fb.group({
      emi:['0',Validators.required],
      loanAmount:['',[Validators.required,Validators.min(100000)]],
      loanTenure:['',Validators.required],
      interest:['',Validators.required],
   },
   {
     validators:[this.uservalidate.emivalidator(50000),this.uservalidate.loanAmountValidator()]
   })



  }

 u:UserApply;


 myAadhar:string;
 myPan:string;
 myAddress:string;
 mySalaryslip:string;
  onStep2()
  {
    this.step2 = false;
    this.step3= true;
    this.check2 = true;
    this.show2 = 'visible';

   this.u = new UserApply(this.applyForm.controls.address.value ,this.applyForm.controls.state.value ,
       this.applyForm.controls.city.value, this.applyForm.controls.pin.value ,
        this.applyForm.controls.empType.value,this.applyForm.controls.annual.value,
         this.myAadhar, this.myPan,
         this.myAddress, this.mySalaryslip
         )


  }
  filename:any;
showPopup2:boolean = false;
showPopup3:boolean = false;
  onStep4()
  {    
  
   
    let u1:LoanApplication = new LoanApplication(this.vehicleDetails.controls.chasis.value ,this.vehicleDetails.controls.brand.value,
      this.vehicleDetails.controls.color.value , this.vehicleDetails.controls.model.value,this.vehicleDetails.controls.type.value,
      this.vehicleDetails.controls.exPrice.value, this.vehicleDetails.controls.onRoad.value,
      this.loanDetails.controls.emi.value, this.loanDetails.controls.loanTenure.value,this.loanDetails.controls.interest.value, 
      this.loanDetails.controls.loanAmount.value, this.u )

      this.loanService.addLoanApplication(u1).subscribe(u1 =>{
        if(u1.status=="SUCCESS")
        {
          this.showPopup2=true;
        
        }
        else{
         this.showPopup3=true;
         
        }
  
      });
  
  }

  removePop2(){
    setTimeout(function () {
      window.location.href = 'userDashboard';
    }, 200);
    this.showPopup2=false;

  }

  removePop3(){
    setTimeout(function () {
      window.location.href = 'apply-loan';
    }, 200);
    this.showPopup3=false;
  }

  selectedFiles: FileList;
  selectedFiles2:FileList;
  selectedFiles3:FileList;
  selectedFiles4:FileList;





  //


  showPopup1;boolean = false;

  baseUrl:string = "https://vehicle-loan.s3.ap-south-1.amazonaws.com/documents/"
  onFileselect(event){

  
    this.selectedFiles = event.target.files;


  }
OnUploadFile(){
this.showPopup1 = true;
  const file = this.selectedFiles.item(0);
  this.uploadService.uploadFile(file,this.filename+ "/aadhar");
this.myAadhar=  this.baseUrl+ this.filename+"/aadhar";
          


}


onFileselect2(event){

 
  this.selectedFiles2 = event.target.files;


}
OnUploadFile2(){
  this.showPopup1 = true;
const file = this.selectedFiles2.item(0);
this.uploadService.uploadFile(file, this.filename + "/pan");
this.myPan = this.baseUrl+ this.filename+"/pan";

}
onFileselect3(event){

 
  this.selectedFiles3 = event.target.files;


}
OnUploadFile3(){
  this.showPopup1 = true;
const file = this.selectedFiles3.item(0);
this.uploadService.uploadFile(file," this.filename"+"/addressProof");
this.myAddress = this.baseUrl+this.filename+"/addressProof";




}

onFileselect4(event){

  
  this.selectedFiles = event.target.files;


}
OnUploadFile4(){
  this.showPopup1 = true;
const file = this.selectedFiles.item(0);
this.uploadService.uploadFile(file, +  this.filename + "/salarySlip");
this.mySalaryslip= this.baseUrl+ this.filename+"/salarySlip";


}


removePop1(){
  this.showPopup1 = false;
}
} 
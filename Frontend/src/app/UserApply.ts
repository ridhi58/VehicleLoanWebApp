import { Account } from './Account';
import { User } from './User';

export class UserApply{
    userId:number;
    address:string;
    state:string;
    city:string;
    pin:string;
    emptype:string;
    salary:string;
    aadhar:string;
    pan:string;
    salarySlip:string;
    addressProof:string;
    userregister:User;
    account:Account;
   

    constructor( address:string,
        state:string,
        city:string,
        pin:string,
        emptype:string,
        salary:string,
        aadhar:string,
        pan:string,
        salarySlip:string,
        addressProof:string,
        )
        {
            this.address=address;
            this.state = state;
            this.city=city;
            this.pin= pin;
            this.emptype = emptype;
            this.salary = salary;
            this.aadhar = aadhar;
            this.pan=pan;
            this.salarySlip=salarySlip;
            this.addressProof=addressProof;
           
        }

}
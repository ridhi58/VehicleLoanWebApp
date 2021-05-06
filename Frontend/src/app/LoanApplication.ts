import {UserApply} from './UserApply'


export class LoanApplication{
    chassisNo:string;
	status:string;
	brand:string;
	colour:string;
	model:string;
	type:number;
	exShowPrice:number;
    onRoadPrice:number;   
    existingEMI:number;
	tenure:number;
	interest:number;
	amount:number;
    appdate:Date;
    user:UserApply;
    
    constructor(chassisNo:string, brand:string, colour:string, model:string, type:number, exShowPrice:number,
        onRoadPrice:number ,existingEMI:number, tenure:number, interest:number, amount:number, user:UserApply) {
    this.chassisNo = chassisNo,
    this.existingEMI = existingEMI;
    this.tenure = tenure;
    this.interest = interest;
    this.amount = amount;
    this.brand = brand;
    this.colour = colour;
    this.model = model;
    this.type = type;
    this.exShowPrice = exShowPrice;
    this.onRoadPrice = onRoadPrice;
    this.user = user;
}
}

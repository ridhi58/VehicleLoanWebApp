import { UserApply } from './UserApply';

export class User{
    email:string;
    name:string;
    gender:string;
    mobile :string;
    age:number;
    password:string;
    userdetails:UserApply;

    constructor( email:string,
        name:string,
        gender:string,
        mobile :string,
        age:number,
        password:string )
    {
       this.name = name;
       this.email = email;
       this.gender = gender;
       this.mobile = mobile;
       this.age = age;
       this.password = password;
    }
    


}
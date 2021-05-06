import { LoanApplication } from './LoanApplication'
import { Account } from './Account'

export class Approved {
    loanId: number;
    emi: number;
    emidate: string;
    loanapp: LoanApplication;
    account: Account;
    
    constructor() { }

}
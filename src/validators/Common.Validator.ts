
export interface CommonValidatorI{
    validateAccount(accountNumber: string, accountDigit: string): boolean;
    valdateAgency(accountNumber: string, accountDigit: string): boolean;
}

export class BankInfo{
    constructor(
        public accountNumber:string,
        public accountDigit:string,
        public agencyNumber:string,
        public agencyDigit = '',
    ){
        this.accountNumber = accountNumber
        this.accountDigit = accountDigit
        this.agencyNumber = agencyNumber
        this.agencyDigit = agencyDigit
    }
}

export class CommonValidator{
    protected agencyNumberLength = 4;
    protected accountNumberLenght = 8;
    protected accountDigitLenght = 1;

    public  validate(bankInfo: BankInfo): boolean {
        let validAgency = this.valdateAgency(bankInfo.agencyNumber, bankInfo.agencyDigit);
        let validAccount = this.validateAccount(bankInfo.accountNumber, bankInfo.accountDigit);
        return validAgency && validAccount

    }
    
    public validateAccount(accountNumber: string, accountDigit: string): boolean {
        return this.isValidAccountNumber(accountNumber) && this.isValidAccountDigit(accountDigit);
    }

    public valdateAgency(agencyNumber: string, agencyDigit: string =''): boolean {
        if(agencyDigit){
            return this.isValidAgencyNumber(agencyNumber) && this.isValidAgencyDigit(agencyDigit)
        }
        return this.isValidAgencyNumber(agencyNumber) 
    }
    
    public isValidAgencyNumber(agencyNumber: string):boolean{
        return /^(?!0000)([0-9]{4})$/.test(agencyNumber);
    }

    public isValidAgencyDigit(digitNumber: string): boolean {
        return /^[a-zA-Z0-9]{0,1}$/.test(digitNumber) && digitNumber.length === this.accountDigitLenght;
    }

    public isValidAccountNumber(accountNumber: string): boolean {
         return (/^[0-9]{1,12}$/.test(accountNumber) && parseInt(accountNumber) > 0) && accountNumber.length == this.accountNumberLenght;
    }
    public  isValidAccountDigit(accountDigit: string): boolean {
        return /^[a-zA-Z0-9]{1}$/.test(accountDigit);
    }

    addLeftZero(item: string, length: number){
        let newItem = "";
        for(let i = item.length ; i < length; i++){
            newItem += '0'
        }
        newItem += item
        return newItem;
    }

}
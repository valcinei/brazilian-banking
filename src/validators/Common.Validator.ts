
export interface CommonValidatorI{
    validate(bankInfo:BankInfo):boolean;
}

export class BankInfo{
    constructor(
       public agencyNumber:string,
       public agencyDigit:string,
       public accountNumber:string,
       public accountDigit:string,
    ){
        this.agencyNumber = agencyNumber
        this.agencyDigit = agencyDigit
        this.accountNumber = accountNumber
        this.accountDigit = accountDigit
    }
}

export class CommonValidator{
    protected agencyNumberLength = 4;
    protected accountNumberLengh = 8;
    protected accountDigitLengh = 1;
       
    public isValidAgencyNumber(agencyNumber: string):boolean{
        return /^(?!0000)([0-9]{4})$/.test(agencyNumber);
    }

    public isValidAgencyDigit(digitNumber: string): boolean {
        return /^[a-zA-Z0-9]{0,1}$/.test(digitNumber) && digitNumber.length === this.accountDigitLengh;
    }

    public isValidAccountNumber(accountNumber: string): boolean {
         return (/^[0-9]{1,12}$/.test(accountNumber) && parseInt(accountNumber) > 0) && accountNumber.length == this.accountNumberLengh;
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
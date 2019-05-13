
import { CommonValidator, CommonValidatorI, BankInfo } from './Common.validator';

export class BradescoValidator extends CommonValidator implements CommonValidatorI {
    protected accountNumberLengh = 8;
    protected accountDigitLengh = 1;

    constructor() {
        super()
    }


    
    public validateAccount(accountNumber: string, accountDigit: string): boolean {
        accountNumber = this.addLeftZero(accountNumber, 8)
        let calculatedDigit = this.getCalculatedSequency(accountNumber, 9);
        return accountDigit.toUpperCase() === calculatedDigit;
    }

    public valdateAgency(agencyNumber: string, agencyDigit: string): boolean {
        agencyNumber = this.addLeftZero(agencyNumber, 4)
        let calculatedDigit = this.getCalculatedSequency(agencyNumber, 5);
        let validAgencyDigit:boolean = false;

        if(agencyDigit.length){
            validAgencyDigit =  this.isValidAgencyDigit(agencyDigit)
            let valid = this.isValidAgencyNumber(agencyNumber)  && validAgencyDigit;
            return (agencyDigit.toUpperCase() === calculatedDigit) && valid;
        }else{
            return this.isValidAgencyNumber(agencyNumber)
        }
        

    }

    private getCalculatedSequency(sequencyNumber: string, subtractValue: number) {
        let sumSeq = 0
        let splitedNumbers = sequencyNumber.split("");
        splitedNumbers.forEach((item: any, index: number) => {
            let seq = subtractValue - index
            sumSeq += (parseInt(item) * seq)
        })
        return this.getDigit(sumSeq);
    }

    private getDigit(sumSeq: any) {
        let result = 11 - (sumSeq % 11);
        if (result === 10) {
            return "X";
        } else {
            if (result === 11) {
                return "0";
            } else {
                return result.toString();
            }
        }
    }



}

import { CommonValidator, CommonValidatorI } from './Common.validator';

export class BradescoValidator extends CommonValidator implements CommonValidatorI {
    protected accountNumberLenght = 7;
    protected accountDigitLenght = 1;

    constructor() {
        super()
    }

    public validateAccount(accountNumber: string, accountDigit: string): boolean {
        accountNumber = this.addLeftZero(accountNumber, this.accountNumberLenght)
        let calculatedDigit = this.getSequencyAccount(accountNumber);
        if(calculatedDigit == "0"){
            return (calculatedDigit === accountDigit);
        }
        return accountDigit.toUpperCase() === calculatedDigit;
    }

    public valdateAgency(agencyNumber: string, agencyDigit: string = ''): boolean {
        agencyNumber = this.addLeftZero(agencyNumber, this.agencyNumberLength)
        
        let calculatedDigit = this.getSequencyAgency(agencyNumber);
        let validAgencyDigit:boolean = false;

        if(agencyDigit.length){
            validAgencyDigit =  this.isValidAgencyDigit(agencyDigit)
            let valid = this.isValidAgencyNumber(agencyNumber)  && validAgencyDigit;
            return (agencyDigit.toUpperCase() === calculatedDigit || calculatedDigit == 'P') && valid;
        }else{
            return this.isValidAgencyNumber(agencyNumber)
        } 

    }

    private getSequencyAgency(sequencyNumber: string) {
        let sumSeq = 0
        let splitedNumbers = sequencyNumber.split("");
        splitedNumbers.forEach((item: any, index: number) => {
            let  seq = 5 - index;
            sumSeq += (parseInt(splitedNumbers[index]) * seq);
        })
        return this.getAgencyDigit(sumSeq);
    }

    private getSequencyAccount(sequencyNumber: string) {
         let sumSeq = 0
        let splitedNumbers = sequencyNumber.split("");
        splitedNumbers.forEach((item: any, index: number) => {
            var number = parseInt(splitedNumbers[index]);
            sumSeq += this.multiplyAccordingWeight(number, index);
        })
        return this.getAgencyDigit(sumSeq);
    }



    private getAgencyDigit(sumSeq: any) {
        let result = 11 - (sumSeq % 11);
        if (result === 10) {
            return "P";
        } else {
            if (result === 11) {
                return "0";
            } else {
                return result.toString();
            }
        }
    }

    private getAccountDigit(sumSeq: any) {
        let module = sumSeq % 11;
        if(module === 0) {
          return "0";
        } else {
          if (module === 1) {
            return "P";
          } else {
            return (11 - module).toString();
          }
        }
    }

    private multiplyAccordingWeight(number: number, index: number) {
        var weight = [2,7,6,5,4,3,2];
        return number * weight[index];
      }
}
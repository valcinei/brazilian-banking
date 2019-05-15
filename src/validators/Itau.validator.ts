
import { CommonValidator, CommonValidatorI } from './Common.validator';

export class Itau extends CommonValidator implements CommonValidatorI {
    protected accountNumberLenght = 5;
    protected accountDigitLenght = 1;

    constructor() {
        super()
    }

    public validateAccount(accountNumber: string, accountDigit: string ='', agencyNumber?:string): boolean {
        accountNumber = this.addLeftZero(accountNumber, this.accountNumberLenght)
        let calculatedDigit = this.getCalculatedSequency(agencyNumber, accountNumber);

        return accountDigit.toUpperCase() === calculatedDigit;
    }

    public valdateAgency(agencyNumber: string, agencyDigit: string = ''): boolean {
        return true

    }

    private getCalculatedSequency( agencyNumber: string| any, accountNumber: string) {
        let sumSeq = 0
        console.log(agencyNumber)
        let splitedNumbers = (agencyNumber + accountNumber).split("");
        let sequence = 0
        splitedNumbers.forEach((item: any, index: number) => {
            let number = parseInt(splitedNumbers[index]);
            sequence = this.multiplyAccordingParity(number, index);
            sequence = this.adjustAccordingLength(sequence);
            sumSeq += sequence;
        })
        return this.getDigit(sumSeq);
    }

    private multiplyAccordingParity(number: number, index:number) {
        return number * (index % 2 === 0 ? 2 : 1);
      }

    private adjustAccordingLength(sequence: number) {
        if(sequence > 9) {
          var numbers = sequence.toString().split("");
          sequence = 0;
          for (var i = 0; i < numbers.length; i++) {
            sequence += parseInt(numbers[i]);
          }
        }
        return sequence;
      }

    private getDigit(sumSeq: any) {
        let module = sumSeq % 10;
        if (module === 0) {
            return "0";
        } else {
            return (10 - module).toString();
        }
    }



}
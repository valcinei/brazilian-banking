
import { CommonValidator, CommonValidatorI, BankInfo } from './Common.validator';

export class SantanderValidator extends CommonValidator implements CommonValidatorI {
    protected accountNumberLenght = 8;
    protected accountDigitLenght = 1;

    constructor() {
        super()
    }


}
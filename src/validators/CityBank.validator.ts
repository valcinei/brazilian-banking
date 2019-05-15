
import { CommonValidator, CommonValidatorI } from './Common.validator';

export class CityBankValidator extends CommonValidator implements CommonValidatorI {
    protected accountNumberLenght = 10;
    protected accountDigitLenght = 1;

    constructor() {
        super()
        
    }


}
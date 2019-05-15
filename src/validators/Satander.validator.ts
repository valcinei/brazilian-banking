
import { CommonValidator, CommonValidatorI } from './Common.validator';

export class Santander extends CommonValidator implements CommonValidatorI {
    protected accountNumberLenght = 8;
    protected accountDigitLenght = 1;

    constructor() {
        super()
    }


}
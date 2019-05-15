import { BancoDoBrasilValidator } from './validators/BancoDoBrasil.validator';
import { BradescoValidator } from './validators/Bradesco.validator';
import { ItauValidator } from './validators/Itau.validator';
import { SantanderValidator } from './validators/Satander.validator';
import { CityBankValidator } from './validators/CityBank.validator';
import { BankInfo, CommonValidator } from './validators/Common.validator';


const brazilianBankValidator = {
    BancoDoBrasilValidator,
    BradescoValidator,
    ItauValidator,
    SantanderValidator,
    CityBankValidator,
    CommonValidator,
    BankInfo }
    
export default brazilianBankValidator 

export { 
    BancoDoBrasilValidator,
    BradescoValidator,
    ItauValidator,
    SantanderValidator,
    CityBankValidator,
    CommonValidator,
    BankInfo }
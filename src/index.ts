import { BancoDoBrasil } from './validators/BancoDoBrasil.validator';
import { Bradesco } from './validators/Bradesco.validator';
import { Itau } from './validators/Itau.validator';
import { Santander } from './validators/Satander.validator';
import { CityBank } from './validators/CityBank.validator';
import { BankingInfo, CommonValidator } from './validators/Common.validator';


const XBankAccount = {
    BancoDoBrasil,
    Bradesco,
    Itau,
    Santander,
    CityBank,
    CommonValidator,
    BankingInfo }

export default XBankAccount 

export { 
    BancoDoBrasil,
    Bradesco,
    Itau,
    Santander,
    CityBank,
    CommonValidator,
    BankingInfo }
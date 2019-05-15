const validator = require('../dist');
const BankingInfo = require('../dist').BankingInfo;

let bbValidator = new validator.BancoDoBrasil();

let bankingInfoData = new BankingInfo('1158253','7','3030');

console.log(bbValidator.validate(bankingInfoData));

/* OR */

let bankingData =  {
accountNumber:'1158253',
accountDigit:'7',
agencyNumber:'3030'
}

console.log(bbValidator.validate( bankingData));
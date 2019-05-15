const validator = require('../dist');
const BankingInfo = require('../dist').BankingInfo;

let bbValidator = new validator.BancoDoBrasil();
let ankInfo = new BankingInfo('1158253','7','3030')

console.log(bbData)
console.log(bbValidator.validate( { accountNumber: '1158253', accountDigit: '7',  agencyNumber: '3030', agencyDigit: '' }))
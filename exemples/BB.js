const validator = require('../dist');
const BankInfo = require('../dist').BankInfo;

let bbValidator = new validator.BancoDoBrasil();
let bbData = new BankInfo('1158253','7','3030')
console.log(bbValidator.validate(bbData))
## Validador de Contas Bancos Brasileitos
Biblioteca para validação de dados bancários ..
## Get started
### Install
```shell
npm install brazilian-banking
```
### Use 
```
const validator = require('brazilian-banking');
const BankingInfo = require('brazilian-banking').BankingInfo;

let bbValidator = new validator.BancoDoBrasil();

let bankingInfoData = new BankingInfo('1158253','7','3030');

console.log(bbValidator.validate(bankingInfoData));
/** true **/

/* OR */

let bankingData =  {
accountNumber:'1158253',
accountDigit:'7',
agencyNumber:'3030'
}
console.log(bbValidator.validate( bankingData));
/** true **/
```
# License
MIT - see LICENSE


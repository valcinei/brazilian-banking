import { BankInfo } from "../../validators/Common.validator";
import { CityBankValidator } from "../../validators/CityBank.validator";


describe("CityBank Santander",()=>{
    it("CityBank Account", ()=>{
        let cityBankValidator = new CityBankValidator()
        expect(cityBankValidator.validateAccount('5280198387','0')).toBeTruthy()
    })

    it("CityBank Seconde Account", ()=>{
        let cityBankValidator = new CityBankValidator()
        expect(cityBankValidator.validateAccount('9671023171','2')).toBeTruthy()
    })

    it("CityBank Agency", ()=>{
        let cityBankValidator = new CityBankValidator()
        expect(cityBankValidator.valdateAgency('0003')).toBeTruthy()
    })
    it("CityBank Account and Agency",()=>{
        let cityBankValidator = new CityBankValidator()
        let bankInfo = new BankInfo('8075175289','4','0020')
        expect(cityBankValidator.validate(bankInfo)).toBeTruthy()
    })
})
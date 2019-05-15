import { BankInfo } from "../../validators/Common.validator";
import { CityBank } from "../../validators/CityBank.validator";


describe("CityBank Santander",()=>{
    it("CityBank Account", ()=>{
        let cityBank = new CityBank()
        expect(cityBank.validateAccount('5280198387','0')).toBeTruthy()
    })

    it("CityBank Seconde Account", ()=>{
        let cityBank = new CityBank()
        expect(cityBank.validateAccount('9671023171','2')).toBeTruthy()
    })

    it("CityBank Agency", ()=>{
        let cityBank = new CityBank()
        expect(cityBank.valdateAgency('0003')).toBeTruthy()
    })
    it("CityBank Account and Agency",()=>{
        let cityBank = new CityBank()
        let bankInfo = new BankInfo('8075175289','4','0020')
        expect(cityBank.validate(bankInfo)).toBeTruthy()
    })
})
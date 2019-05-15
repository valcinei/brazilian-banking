import { BankingInfo } from "../../validators/Common.validator";
import { Santander } from "../../validators/Satander.validator";


describe("Validate Santander",()=>{
    it("Validate Account", ()=>{
        let santander = new Santander()
        expect(santander.validateAccount('09499149','3')).toBeTruthy()
    })

    it("Validate Seconde Account", ()=>{
        let santander = new Santander()
        expect(santander.validateAccount('50817594','6')).toBeTruthy()
    })

    it("Validate Agency", ()=>{
        let santander = new Santander()
        expect(santander.valdateAgency('4548')).toBeTruthy()
    })
    it("Validate Account and Agency",()=>{
        let santander = new Santander()
        let bankInfo = new BankingInfo('45162447','2','2130')
        expect(santander.validate(bankInfo)).toBeTruthy()
    })
})
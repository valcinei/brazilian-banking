import { BankInfo } from "../../validators/Common.validator";
import { SantanderValidator } from "../../validators/Satander.validator";


describe("Validate Santander",()=>{
    it("Validate Account", ()=>{
        let santanderValidator = new SantanderValidator()
        expect(santanderValidator.validateAccount('09499149','3')).toBeTruthy()
    })

    it("Validate Seconde Account", ()=>{
        let santanderValidator = new SantanderValidator()
        expect(santanderValidator.validateAccount('50817594','6')).toBeTruthy()
    })

    it("Validate Agency", ()=>{
        let santanderValidator = new SantanderValidator()
        expect(santanderValidator.valdateAgency('4548')).toBeTruthy()
    })
    it("Validate Account and Agency",()=>{
        let santanderValidator = new SantanderValidator()
        let bankInfo = new BankInfo('45162447','2','2130')
        expect(santanderValidator.validate(bankInfo)).toBeTruthy()
    })
})
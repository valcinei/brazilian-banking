import { BankInfo } from "../../validators/Common.validator";
import { BradescoValidator } from "../../validators/Bradesco.validator";


describe("Validate Bradesco",()=>{
    it("Validate Account", ()=>{
        let bradescoValidator = new BradescoValidator()
        expect(bradescoValidator.validateAccount('1760578','P')).toBeTruthy()
    })

    it("Validate Seconde Account", ()=>{
        let bradescoValidator = new BradescoValidator()
        expect(bradescoValidator.validateAccount('1331037','8')).toBeTruthy()
    })

    it("Validate Agency", ()=>{
        let bradescoValidator = new BradescoValidator()
        expect(bradescoValidator.valdateAgency('3870')).toBeTruthy()
    })
    it("Validate Account and Agency",()=>{
        let bradescoValidator = new BradescoValidator()
        let bankInfo = new BankInfo('1004908','3','1315')
        expect(bradescoValidator.validate(bankInfo)).toBeTruthy()
    })
})
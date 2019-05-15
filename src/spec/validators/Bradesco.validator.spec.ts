import { BankingInfo } from "../../validators/Common.validator";
import { Bradesco } from "../../validators/Bradesco.validator";


describe("Validate Bradesco",()=>{
    it("Validate Account", ()=>{
        let bradesco = new Bradesco()
        expect(bradesco.validateAccount('1760578','P')).toBeTruthy()
    })

    it("Validate Seconde Account", ()=>{
        let bradesco = new Bradesco()
        expect(bradesco.validateAccount('1331037','8')).toBeTruthy()
    })

    it("Validate Agency", ()=>{
        let bradesco = new Bradesco()
        expect(bradesco.valdateAgency('3870')).toBeTruthy()
    })
    it("Validate Account and Agency",()=>{
        let bradesco = new Bradesco()
        let bankInfo = new BankingInfo('1004908','3','1315')
        expect(bradesco.validate(bankInfo)).toBeTruthy()
    })
})
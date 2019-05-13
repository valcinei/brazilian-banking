import { BankInfo } from "../../validators/Common.validator";
import { ItauValidator } from "../../validators/Itau.validator";



describe("Validate Santander",()=>{
    it("Validate Account", ()=>{
        let itauValidator = new ItauValidator()
        expect(itauValidator.validateAccount('83551','7', '1565')).toBeTruthy()
    })

    it("Validate Seconde Account", ()=>{
        let itauValidator = new ItauValidator()
        expect(itauValidator.validateAccount('73337','6','0507')).toBeTruthy()
    })

    it("Validate Agency", ()=>{
        let itauValidator = new ItauValidator()
        expect(itauValidator.valdateAgency('5097')).toBeTruthy()
    })
    it("Validate Account and Agency",()=>{
        let itauValidator = new ItauValidator()
        let bankInfo = new BankInfo('20141','6','8245')
        expect(itauValidator.validate(bankInfo)).toBeTruthy()
    })
})
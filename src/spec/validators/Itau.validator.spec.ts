import { BankingInfo } from "../../validators/Common.validator";
import { Itau } from "../../validators/Itau.validator";



describe("Validate Santander",()=>{
    it("Validate Account", ()=>{
        let itau = new Itau()
        expect(itau.validateAccount('83551','7', '1565')).toBeTruthy()
    })

    it("Validate Seconde Account", ()=>{
        let itau = new Itau()
        expect(itau.validateAccount('73337','6','0507')).toBeTruthy()
    })

    it("Validate Agency", ()=>{
        let itau = new Itau()
        expect(itau.valdateAgency('5097')).toBeTruthy()
    })
    it("Validate Account and Agency",()=>{
        let itau = new Itau()
        let bankInfo = new BankingInfo('20141','6','8245')
        expect(itau.validate(bankInfo)).toBeTruthy()
    })
})
import { BancoDoBrasil } from "../..";
import { BankInfo } from "../../validators/Common.validator";


describe("Validate Banco do Brasil",()=>{
    it("Validate Account", ()=>{
        let bancoDoBrasil = new BancoDoBrasil()
        expect(bancoDoBrasil.validateAccount('1173080','3')).toBeTruthy()
    })

    it("Validate Seconde Account", ()=>{
        let bancoDoBrasil = new BancoDoBrasil()
        expect(bancoDoBrasil.validateAccount('1217916','7')).toBeTruthy()
    })

    it("Validate Agency", ()=>{
        let bancoDoBrasil = new BancoDoBrasil()
        expect(bancoDoBrasil.valdateAgency('6513')).toBeTruthy()
    })
    it("Validate Account and Agency",()=>{
        let bancoDoBrasil = new BancoDoBrasil()
        let bankInfo = new BankInfo('97870','1','3030','9')
        expect(bancoDoBrasil.validate(bankInfo)).toBeTruthy()
    })
})
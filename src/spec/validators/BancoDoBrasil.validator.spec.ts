import { BancoDoBrasilValidator } from "../..";
import { BankInfo } from "../../validators/Common.validator";


describe("Validate Banco do Brasil",()=>{
    it("Validate Account", ()=>{
        let bancoDoBrasilValidator = new BancoDoBrasilValidator()
        expect(bancoDoBrasilValidator.validateAccount('1173080','3')).toBeTruthy()
    })

    it("Validate Seconde Account", ()=>{
        let bancoDoBrasilValidator = new BancoDoBrasilValidator()
        expect(bancoDoBrasilValidator.validateAccount('1217916','7')).toBeTruthy()
    })

    it("Validate Agency", ()=>{
        let bancoDoBrasilValidator = new BancoDoBrasilValidator()
        expect(bancoDoBrasilValidator.valdateAgency('6513','7')).toBeTruthy()
    })
    it("Validate Account and Agency",()=>{
        let bancoDoBrasilValidator = new BancoDoBrasilValidator()
        let bankInfo = new BankInfo('1432','','97870','1')
        expect(bancoDoBrasilValidator.validate(bankInfo)).toBeTruthy()
    })
})
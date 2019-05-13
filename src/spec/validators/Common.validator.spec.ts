
import { CommonValidator } from '../../validators/Common.validator';

describe("Common Validator Agency", ()=>{
    it('Test is valid agency number', ()=>{
        let commonValidator = new CommonValidator();
        expect(commonValidator.isValidAgencyNumber('0577'))
        .toBeTruthy();
    })

    it('Test is valid account number', ()=>{
        let commonValidator = new CommonValidator();
        expect(commonValidator.isValidAgencyDigit('1'))
        .toBeTruthy();
    })
})

describe("Common Validator Account", ()=>{

    it('Test is validade Account number', ()=>{
        let commonValidator = new CommonValidator();
        expect(commonValidator.isValidAccountNumber("12345678") )
           .toBeTruthy();
    })

    it('Test is validade Account Digit', ()=>{
        let commonValidator = new CommonValidator();
        expect(commonValidator.isValidAccountDigit('X') )
           .toBeTruthy();
    })

    it("Add Zero Left", ()=>{
        let bancoDoBrasilValidator = new CommonValidator()
        expect(bancoDoBrasilValidator.addLeftZero('6513', 8)).toEqual("00006513")
    })

})

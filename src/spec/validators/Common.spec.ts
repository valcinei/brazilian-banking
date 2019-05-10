
import { CommonValidator } from '../../validators/Common.Validator';

describe("Common Validator", ()=>{
    it('Test is validade agency number', ()=>{
        let commonValidator = new CommonValidator();
        expect(commonValidator.agencyNumberIsValid('0577')).toBeTruthy();
    })
})
import { Main } from '../passwordChecker.js';
describe("return valid password", function(){

    
    it("should return OK with 12345678 as password", function () {
        let main = new Main();
 
        let result = main.getPassword(12345678);
 
        expect(result).toBe('OK');
    })
})
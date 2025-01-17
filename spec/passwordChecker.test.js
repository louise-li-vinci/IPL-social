import { Main } from '../passwordChecker.js';
describe("return valid password", function(){

    
    it("should return OK with 12345678 as password", function () {
        let main = new Main();
 
        let result = main.getPassword('12345678');
 
        expect(result).toBe('OK');
    });
    it("should return OK with 123456789 as password", function () {
        let main = new Main();
 
        let result = main.getPassword('123456789');
 
        expect(result).toBe('OK');
    });
    it("should return OK with ten character or more then 7 as password", function () {
        let main = new Main();
 
        let result = main.getPassword('1234567890');
 
        expect(result).toBe('OK');
    });
})
import { Main } from '../passwordChecker.js';
describe("return valid password", function(){

    
    Min8Char();
    Min1SpecialChar();
    Min1Number();
    it("should return OK without without 'IPL'", function () {
        let main = new Main();

        let result = main.getPasswordNoIPL('AZERTYUIP234');

        expect(result).toBe('OK');
    });
    it("should return OK wirh valid password'", function () {
        let main = new Main();

        let result = main.getValidePassword('AZERT?1234567');

        expect(result).toBe('OK');
    });
})

function Min1Number() {
    it("should return KO without a number", function () {
        let main = new Main();

        let result = main.getPassword1NumberMin('AZERTYUIOP');

        expect(result).toBe('KO');
    });
    it("should return OK with a number", function () {
        let main = new Main();

        let result = main.getPassword1NumberMin('AZER9TYUIOP');

        expect(result).toBe('OK');
    });
    it("should return OK with 2 number", function () {
        let main = new Main();

        let result = main.getPassword1NumberMin('AZER9TY4UIOP');

        expect(result).toBe('OK');
    });
}

function Min1SpecialChar() {
    it("should return KO without a special character", function () {
        let main = new Main();

        let result = main.getPassword1SpecialCharMin('12345678');

        expect(result).toBe('KO');
    });
    it("should return OK with a special character", function () {
        let main = new Main();

        let result = main.getPassword1SpecialCharMin('12345678&');

        expect(result).toBe('OK');
    });
    it("should return OK with 2 special character", function () {
        let main = new Main();

        let result = main.getPassword1SpecialCharMin('1234#5678&');

        expect(result).toBe('OK');
    });
}

function Min8Char() {
    it("should return OK with 12345678 as password", function () {
        let main = new Main();

        let result = main.getPassword8MinChar('12345678');

        expect(result).toBe('OK');
    });
    it("should return OK with 123456789 as password", function () {
        let main = new Main();

        let result = main.getPassword8MinChar('123456789');

        expect(result).toBe('OK');
    });
    it("should return OK with ten character or more then 7 as password", function () {
        let main = new Main();

        let result = main.getPassword8MinChar('1234567890');

        expect(result).toBe('OK');
    });
    it("should return KO with less then 8 as password", function () {
        let main = new Main();

        let result = main.getPassword8MinChar('123');

        expect(result).toBe('KO');
    });
    it("should return OK with letter and more then 7 as password", function () {
        let main = new Main();

        let result = main.getPassword8MinChar('azertyuiop');

        expect(result).toBe('OK');
    });
}

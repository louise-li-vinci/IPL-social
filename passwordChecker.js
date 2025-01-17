export class Main {

    getPassword8MinChar(password) {
        
        if (password.length >= 8) 
            return 'OK';
        else {
            return 'KO';
        }
    };
    getPassword1SpecialCharMin(password) {
        let specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', "'", ':', '"', '\\', '|', ',', '.', '<', '>', '/', '?'];
        for (let i = 0; i < password.length; i++) {
            if (specialChar.includes(password[i])) {
                return 'OK';
            }
        }
        return 'KO';
    };
};

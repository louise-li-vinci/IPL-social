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
    getPassword1NumberMin(password) {
        let specialChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        for (let i = 0; i < password.length; i++) {
            if (specialChar.includes(password[i])) {
                return 'OK';
            }
        }
        return 'KO';
    }
    getPasswordNoIPL(password) {
        if (password.includes('IPL'||'ipl')) {
            return 'KO';
        }else{
            return 'OK';
        }
    };
    getValidePassword(password) {
        if (this.getPassword1NumberMin(password) == 'OK' && this.getPassword1SpecialCharMin(password) == 'OK' && this.getPassword8MinChar(password) == 'OK' && this.getPasswordNoIPL(password) == 'OK') {
            return 'OK';
        } else {
            return 'KO';
        }
    }
};

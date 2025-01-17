export class Main {

    getPassword8MinChar(password) {
        
        if (password.length >= 8) 
            return 'OK';
        else {
            return 'KO';
        }
        
    }
    
};

export class Main {

    getPassword(password) {
        
        if (password.length >= 8) 
            return 'OK';
        else {
            return 'KO';
        }
        
    }
    
};

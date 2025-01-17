export class Main {

    getPassword(password) {
        if(password === 12345678 || password === 123456789) 
            return 'OK';
        else {
                return 'KO';
            }
        
    }
    
};

import axios from "axios";

export default class AuthService {

    public registration(account: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .post('/register', account)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}

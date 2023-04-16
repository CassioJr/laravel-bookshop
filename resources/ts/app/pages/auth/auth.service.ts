import axios from "axios";

export default class AuthService {

    public registration(account: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .post('api/register', account)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    public login(account: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .post('api/login', account)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}

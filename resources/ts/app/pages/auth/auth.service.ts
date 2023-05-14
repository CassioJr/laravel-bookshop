import axios from "axios";
import {Store} from "vuex";
import VueRouter from "vue-router";

export default class AuthService {
    constructor(private store: Store<any>, private router: VueRouter) {
    }

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

    public logout(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            axios
                .post('api/logout')
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }


    public retrieveAccount(): Promise<boolean> {
        return new Promise(resolve => {
            axios
                .get('api/account')
                .then(res => {
                    this.store.commit('authenticate');
                    const account = res.data;
                    if (account) {
                        this.store.commit('authenticated', account);
                        if (sessionStorage.getItem('requested-url')) {
                            this.router.replace(sessionStorage.getItem('requested-url'));
                            sessionStorage.removeItem('requested-url');
                        }
                    } else {
                        this.store.commit('logout');
                        this.router.push('/', () => {
                        });
                        sessionStorage.removeItem('requested-url');
                    }
                    resolve(true);
                })
                .catch(() => {
                    this.store.commit('logout');
                    resolve(false);
                });
        });
    }

    public hasAnyAuthorityAndCheckAuth(authorities: any): Promise<boolean> {

        if (typeof authorities === 'string') {
            authorities = [authorities];
        }

        if (!this.authenticated || !this.userAuthorities) {
            const token = localStorage.getItem('__application_token') || sessionStorage.getItem('__application_token');
            if (!this.store.getters.account && !this.store.getters.logon && token) {
                return this.retrieveAccount();
            } else {
                return Promise.resolve(false);
            }
        }

        for (const element of authorities) {
            if (this.userAuthorities.filter(item => item.name === element)) {
                return Promise.resolve(true);
            }
        }

        return Promise.resolve(false);
    }

    get authenticated(): boolean {
        return this.store.getters.authenticated;
    }

    get userAuthorities(): any {
        return this.store.getters.account.authorities;
    }
}

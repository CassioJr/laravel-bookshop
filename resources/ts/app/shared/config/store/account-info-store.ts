import {Module} from "vuex";

export const AccountInfoStore: Module<any, any> = {
    state: {
        logon: false,
        user: null,
        authenticated: false,
    },
    getters: {
        logon: state => state.logon,
        account: state => state.user,
        authenticated: state => state.authenticated,
    },
    mutations: {
        authenticate(state) {
            state.logon = true;
        },
        authenticated(state, identity) {
            state.user = identity;
            state.authenticated = true;
            state.logon = false;
        },
        logout(state) {
            state.user = null;
            state.authenticated = false;
            state.logon = false;
        },
    },
};

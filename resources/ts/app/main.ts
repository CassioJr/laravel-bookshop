import '../bootstrap';
import Vue from 'vue';
import router from './router/routes';
import AppComponent from './app.vue';
import Vuelidate from 'vuelidate';
import AuthService from "./pages/auth/auth.service";
import Vuex from 'vuex';
import {AccountInfoStore} from "./shared/config/store/account-info-store";
import {setupAxiosInterceptors} from "./shared/config/axios-interceptor";

Vue.use(Vuelidate);
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        AccountInfoStore,
    },
});

const accountService = new AuthService(store, router);
router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        next('/');
    }
    if (to.meta && to.meta.authorities && to.meta.authorities.length > 0) {
        accountService.hasAnyAuthorityAndCheckAuth(to.meta.authorities).then(value => {
            if (!value) {
                sessionStorage.setItem('requested-url', to.fullPath);
                next('/');
            } else {
                next();
            }
        });
    } else {
        next();
    }
});
setupAxiosInterceptors(() => '');

new Vue({
    el: '#app',
    components: {AppComponent},
    template: '<AppComponent/>',
    router,
    provide: {
        authService: () => accountService,
    },
    store
});

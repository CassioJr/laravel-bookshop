import '../bootstrap';
import Vue from 'vue';
import router from './routes';
import App from './app.vue';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

import NavBarComponent from '../app/components/navbar.vue';

Vue.component('navbar-page', NavBarComponent);

import FooterComponent from '../app/components/footer.vue';

Vue.component('footer-page', FooterComponent);

import ShowBookComponent from '../app/components/show-book.vue';
import AuthService from "./pages/auth/auth.service";

Vue.component('show-book', ShowBookComponent);


new Vue({
    el: '#app',
    components: {App},
    template: '<AppComponent/>',
    router,
    provide: {
        authService: () => new AuthService(),
    },
});

import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home.vue';
import About from '../pages/about.vue';
import Login from '../pages/auth/login.vue';
import Register from '../pages/auth/register.vue';
import BookRegisterComponent from "../pages/book/book-register.vue";
import {Authority} from "../shared/model/enumerations/authority";

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/', component: Home, name: 'home'
        },
        {
            path: '/about', component: About, name: 'about'
        },
        {
            path: '/login', component: Login, name: 'login'
        },
        {
            path: '/register', component: Register, name: 'register'
        },
        {
            path: '/book/register', component: BookRegisterComponent, meta: {authorities: [Authority.ROLE_ADMIN]},
        },
    ]
});

Vue.use(Router);

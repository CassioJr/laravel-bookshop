import Vue from 'vue';
import Router from 'vue-router';
import Home from '../app/pages/home.vue';
import About from '../app/pages/about.vue';
import Login from '../app/pages/auth/Login.vue';
import Register from '../app/pages/auth/register.vue';

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
    ]
});

Vue.use(Router);

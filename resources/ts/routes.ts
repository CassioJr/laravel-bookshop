import { createRouter, createWebHistory } from 'vue-router';
import Home from './app/pages/Home.vue';
import About from './app/pages/About.vue';
const routes = [
{
    path: '/', component: Home, name: 'home'
},
{
    path: '/about', component: About, name: 'about'
}
];

 export default createRouter({
    history: createWebHistory(),
    routes
 });
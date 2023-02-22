import './bootstrap';
import {createApp} from 'vue'
import routes from './routes'
import App from './App.vue'

const app = createApp(App);


import NavBar from './app/components/navbar.vue';
app.component('navbar', NavBar);

import Footer from './app/components/footer.vue';
app.component('footer-page', Footer);

app.use(routes).mount('#app');
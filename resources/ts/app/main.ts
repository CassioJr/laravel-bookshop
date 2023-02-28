import '../bootstrap';
import {createApp} from 'vue'
import routes from './routes'
import App from './app.vue'

const app = createApp(App);

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
app.component('font-awesome-icon', FontAwesomeIcon);

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faUserSecret);

import NavBar from '../app/components/navbar.vue';
app.component('navbar', NavBar);

import Footer from '../app/components/footer.vue';
app.component('footer-page', Footer);

app.use(routes).mount('#app');
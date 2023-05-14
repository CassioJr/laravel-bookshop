import Vue from 'vue';
import Component from "vue-class-component";
import NavBarComponent from '../app/components/navbar.vue';
import FooterComponent from '../app/components/footer.vue';

import ShowBookComponent from '../app/components/show-book.vue';
Vue.component('show-book', ShowBookComponent);
@Component({
    components: {
        'navbar-page': NavBarComponent,
        'footer-page': FooterComponent,
    },
})
export default class AppComponent extends Vue {

}

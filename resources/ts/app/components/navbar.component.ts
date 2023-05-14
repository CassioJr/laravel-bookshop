import {Component, Inject, Vue} from 'vue-property-decorator';
import AuthService from "../pages/auth/auth.service";

@Component
export default class NavbarComponent extends Vue {
    @Inject('authService') private authService: () => AuthService;
    private hasAuthorities = false;
    public logout() {
        localStorage.removeItem('__application_token');
        sessionStorage.removeItem('__application_token');
        this.$store.commit('logout');
        this.$router.push('/', () => {});
    }

    get authenticated(): boolean {
        return this.$store.getters.authenticated;
    }

    public hasAuthority(authorities: any): boolean {
        this.authService()
            .hasAnyAuthorityAndCheckAuth(authorities)
            .then(value => {
                this.hasAuthorities = value;
            });
        return this.hasAuthorities;
    }

}

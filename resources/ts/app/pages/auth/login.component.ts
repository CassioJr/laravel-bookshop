import {Component, Inject, Vue} from 'vue-property-decorator'
import {required} from "vuelidate/lib/validators";
import AuthService from "./auth.service";
import {IUser, User} from "../../shared/model/user.model";
import Cookies from "js-cookie";

const validations: any = {
    user: {
        email: {required},
        password: {required}
    }
}
@Component({
    validations
})
export default class LoginComponent extends Vue {

    @Inject('authService') private authService: () => AuthService;
    public user: IUser = new User();
    public isSendingInfo = false;

    public mounted() {
        Cookies.remove('__application_token');
    }

    public login() {
        this.isSendingInfo = true;
        this.authService().login(this.user).then(res => {
            Cookies.set('__application_token', res.data.access_token);
            this.isSendingInfo = false;
        }).catch(err => {
            console.log(err);
            this.isSendingInfo = false;
        })
    }
}

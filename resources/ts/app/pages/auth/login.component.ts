import {Component, Inject, Vue} from 'vue-property-decorator'
import {required} from "vuelidate/lib/validators";
import AuthService from "./auth.service";
import {IUser, User} from "../../shared/model/user.model";

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
}

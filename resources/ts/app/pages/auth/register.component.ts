import {Component, Vue, Inject} from 'vue-property-decorator';
import {IUser, User} from "../../shared/model/user.model";
import {email, required, sameAs} from "vuelidate/lib/validators";
import AuthService from "./auth.service";

const validations: any = {
    user: {
        nome: {required},
        email: {required, email},
        senha: {required},
        confirmarSenha: {required, sameAsPassword: sameAs('senha')}
    }
}

@Component({
    validations,
})
export default class RegisterComponent extends Vue {
    private authService: AuthService = new AuthService();
    public user: IUser = new User();

    public submit(){
        this.authService.registration(this.user).then(res => {
        })
    }
}

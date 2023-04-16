import {Component, Vue, Inject} from 'vue-property-decorator';
import {IUser, User} from "../../shared/model/user.model";
import {email, required, sameAs} from "vuelidate/lib/validators";
import AuthService from "./auth.service";

const validations: any = {
    user: {
        name: {required},
        email: {required, email},
        password: {required},
        confirmPassword: {required, sameAsPassword: sameAs('password')}
    }
}

@Component({
    validations,
})
export default class RegisterComponent extends Vue {
    @Inject('authService') private authService: () => AuthService;
    public user: IUser = new User();
    public isSaving = false;

    public submit() {
        this.isSaving = true;
        this.authService().registration(this.user).then(res => {
            alert('User has successfully registered!');
            this.isSaving = false;
        }).catch(err => {
            alert(err.response.data.message);
            this.isSaving = false;
        })
    }
}

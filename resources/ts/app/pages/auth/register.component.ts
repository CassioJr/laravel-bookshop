import { email, required } from '@vuelidate/validators';
import { Vue } from 'vue-property-decorator'

const validators:any = {
       user: {
           nome: { required },
           email: {required, email },
           password: {required}
        }
}

export default class RegisterComponent extends Vue{}
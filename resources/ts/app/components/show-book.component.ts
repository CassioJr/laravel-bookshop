import {Prop, Vue} from "vue-property-decorator";
import Component from "vue-class-component";

@Component
export default class ShowBookComponent extends Vue {

    @Prop()
    books: string = '';
}

export interface IUser {
    id?: any;
    nome?: string;
    email?: string;
    senha?: string;
    confirmarSenha?: string;
}

export class User implements IUser {
    constructor(
        public id?: number,
        public nome?: string,
        public email?: string,
        public senha?: string,
        public confirmarSenha?: string,
    ) {
    }
}

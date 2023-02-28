export interface IUser{
    id?: any;
    nome?: string;
    email?: string;
    senha?: string;
}

export class User implements IUser{
    constructor(
        public id?: any,
        public nome?: string,
        public email?: string,
        public senha?: string,
    ){}
}
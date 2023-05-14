import {Authority} from "./enumerations/authority";

export interface IUser {
    id?: any;
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    authorities?: Authority;
}

export class User implements IUser {
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public password?: string,
        public confirmPassword?: string,
        public authority?: Authority
    ) {
    }
}

import {Album} from "./album";
import {ListAlbum} from "./listAlbum";
export class User{
    private _user:string;
    private _password:string;
    listAlbum:ListAlbum=new ListAlbum()


    constructor(user: string, password: string, listAlbum: ListAlbum) {
        this._user = user;
        this._password = password;
        this.listAlbum = listAlbum;
    }

    get user(): string {
        return this._user;
    }

    set user(value: string) {
        this._user = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
    add(){}
}
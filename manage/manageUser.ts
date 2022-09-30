import {Manager} from "./Manager";
import {User} from "../Pojo/user";
import {ListAlbum} from "../Pojo/listAlbum";

export class ManageUser implements Manager<User> {
    listUser: User[] = [new User('admin','admin',new ListAlbum())];

    add(t: User) {
        this.listUser.push(t)
    }

    delete(id) {
    }

    edit(id, name) {
    }

    findAll() {
    }

}
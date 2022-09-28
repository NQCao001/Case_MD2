import {Manager} from "./Manager";
import {User} from "../Pojo/user";

export class ManageUser implements Manager<User>{
    listUser:User[]=[];
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
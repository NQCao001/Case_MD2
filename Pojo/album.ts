import {Music} from "./music";
import {Manager} from "../manage/Manager";

export class Album implements Manager<Music>{
    private _name:string;
    private _id:number;
    listMusic:Music[]=[]
    constructor(name: string, id: number, listMusic: Music[]) {
        this._name = name;
        this._id = id;
        this.listMusic = listMusic;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    add(t: Music) {
    }

    delete(id) {
    }

    edit(id, name) {
    }

    findAll() {
    }
}
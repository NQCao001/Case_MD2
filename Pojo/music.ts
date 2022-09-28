import {Album} from "./album";
import {Manager} from "../manage/Manager";

export class Music implements Manager<Music>{
    private _name:string;
    private _id:number;
    private _singer:string;
    constructor(name: string, id: number, singer: string) {
        this._name = name;
        this._id = id;
        this._singer = singer;
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

    get singer(): string {
        return this._singer;
    }

    set singer(value: string) {
        this._singer = value;
    }

    add(t: Music) {
    }

    delete(id) {
    }

    edit(id, name) {
    }

    findAll() {
    }
    find(){}
}
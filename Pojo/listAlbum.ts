import {Manager} from "../manage/Manager";
import {Album} from "./album";

export class ListAlbum implements Manager<Album>{
    listAlbum:Album[]=[]

    add(t: Album) {
        this.listAlbum.push(t)
    }

    delete(id) {
        this.listAlbum=this.listAlbum.filter((item)=>{
            if(item.id!=id)
                return this.listAlbum
        })
    }

    edit(id, name) {
        this.listAlbum.map((item)=>{
            if(item.id==id)
                item.name=name
            return this.listAlbum
        })
    }

    findAll() {
        for (let i = 0; i < this.listAlbum.length; i++) {
            console.log(`${i+1}:${this.listAlbum[i]}`)
        }
    }
    findById(id){
        this.listAlbum.filter((item)=>{
            if(item.id==id)
                return this.listAlbum
        })
    }

}
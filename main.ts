import {User} from "./Pojo/user";
import {ListAlbum} from "./Pojo/listAlbum";
import {Album} from "./Pojo/album";
import {ManageUser} from "./manage/manageUser";
import {Music} from "./Pojo/music";

let input = require('readline-sync')

function start() {
    console.log('----------------\n1.Dang nhap\n2.Dang ky tai khoan moi\n0.Thoat\n----------------')

}

let listU: ManageUser = new ManageUser()
let flag: boolean = null
let index = null

function main() {
    let choice = null
    while (choice != 0) {
        start()
        choice = +input.question('Nhap lua chon:')
        switch (choice) {
            case 1:
                login()
                break;
            case 2:
                register()
                break;
            case 0:
                break;
        }
    }
}

function login() {
    let user = input.question('Nhap tai khoan:')
    let password = input.question('Nhap mat khau:')
    for (let i = 0; i < listU.listUser.length; i++) {
        if (listU.listUser[i].user == user && listU.listUser[i].password == password) {
            index = listU.listUser.indexOf(listU.listUser[i])
            flag = true;
            break
        } else {
            flag = false
        }
    }
    switch (flag) {
        case true:
            menuUser()
            break;
        case false:
            console.log('Sai ten dang nhap hoac tai khoan.\nVui long nhap lai!!!')
            break
    }
}

function register() {
    let user = input.question('Nhap tai khoan moi:')
    let password = input.question('Nhap mat khau moi:')
    let listAlbumUser: ListAlbum = new ListAlbum()
    listU.add(new User(user, password, listAlbumUser))
}

function menuUser() {
    let choice = null
    while (choice != 0) {
        console.log('----------------\n1.Danh sach album\n2.Them album moi\n3.Sua ten album\n4.Tim kiem Album\n5.Xoa Album\n0.Dang xuat\n----------------')
        choice = +input.question('Nhap lua chon:')
        switch (choice) {
            case 1:
                showListAlbum()
                menuMusic()
                break;
            case 2:
                addAlbum()
                break;
            case 3:
                showListAlbum()
                edit()
                break;
            case 4:
                search()
                break;
            case 5:
                showListAlbum()
                remove()
                break;
            case 6:
                for (let i = 0; i < listU.listUser[index].listAlbum.listAlbum.length; i++) {
                    console.log(listU.listUser[index].listAlbum.listAlbum[i].listMusic)
                }
                break;
            case 0:
                break;
        }
    }
}

function showListAlbum() {
    for (let i = 0; i < listU.listUser[index].listAlbum.listAlbum.length; i++) {
        console.log(`${i + 1}:    ${listU.listUser[index].listAlbum.listAlbum[i].name}      Ma Album: ${listU.listUser[index].listAlbum.listAlbum[i].id}`)
    }
}

function addAlbum() {
    let nameAlbum = input.question('nhap ten album:')
    let id = +input.question('Nhap ma Album:')
    listU.listUser[index].listAlbum.add(new Album(nameAlbum, id, []))
}

function edit() {
    let id = +input.question('Nhap ma Album muon doi ten:')
    let newName = input.question('Nhap ten muon thay doi:')
    listU.listUser[index].listAlbum.edit(id, newName)
}

function search() {
    let id = +input.question('Nhap ma Album:')
    for (let i = 0; i < listU.listUser[index].listAlbum.listAlbum.length; i++) {
        if (listU.listUser[index].listAlbum.listAlbum[i].id == id) {
            console.log(`Ma Album: ${listU.listUser[index].listAlbum.listAlbum[i].id}         Name:${listU.listUser[index].listAlbum.listAlbum[i].name}`)
        }
    }
}

function remove() {
    let id = +input.question('Nhap ma Album muon xoa:')
    listU.listUser[index].listAlbum.delete(id)
}

let indexAlbum

function menuMusic() {
    let choice = null
    do {
        let flag: boolean = null
        console.log('0.Tro ve')
        choice = +input.question('Nhap ma Album:')
        for (let i = 0; i < listU.listUser[index].listAlbum.listAlbum.length; i++) {
            if (listU.listUser[index].listAlbum.listAlbum[i].id == choice) {
                indexAlbum = listU.listUser[index].listAlbum.listAlbum[i]
                // indexAlbum.listMusic.push(new Music('den',1,'denn'))1
                // console.log(indexAlbum.listMusic[0].name)
                flag = true
                break;
            } else {
                flag = false
            }
        }
        switch (flag) {
            case true:
                showMenuMusic()
                break;
            case false:
                console.log('Khong co Album trong danh sach co san!!!')
                showListAlbum()
                break;
        }
    } while (choice != 0)
}

function showMenuMusic() {
    let choice = null
    do {
        console.log('----------------\n1.Them nhac vao album\n2.Hien thi danh sach nhac\n3.Sua ten bai hat\n4.Tim kiem bai hat\n5.Xoa bai hat\n0.Tro ve\n----------------')
        choice = +input.question('Nhap lua chon cua ban:')
        switch (choice) {
            case 1:
                addMusic()
                break;
            case 2:
                showMusic()
                break;
            case 3:
                editMusic()
                break;
            case 4:
                searchMusic()
                break;
            case 5:
                removeMusic()
                break;
        }
    } while (choice != 0)
}

function addMusic() {
    let name = input.question('Nhap ten bai hat:')
    let id = +input.question('Nhap ma bai hat:')
    let singer = input.question('Nhap ten ca si:')
    indexAlbum.listMusic.push(new Music(name, id, singer))
}

function showMusic() {
    for (let i = 0; i < indexAlbum.listMusic.length; i++) {
        console.log(`${i + 1}:   Ten bai hat:${indexAlbum.listMusic[i].name}    Ca si:${indexAlbum.listMusic[i].singer}    Ma bai hat:${indexAlbum.listMusic[i].id}`)

    }
}

function editMusic() {
    let choice = +input.question('Nhap ma bai hat muon sua:')
    let newName = input.question('Nhap ten moi cua bai hat:')
    for (let i = 0; i < indexAlbum.listMusic.length; i++) {
        if (indexAlbum.listMusic[i].id == choice) {
            indexAlbum.listMusic[i].name = newName
        }
    }
}

function searchMusic() {
    let key = input.question('Nhap tu khoa muon tim kiem:')
    for (let i = 0; i < indexAlbum.listMusic.length; i++) {
        if (indexAlbum.listMusic[i].name.includes(key))
            console.log(`Ten bai hat:${indexAlbum.listMusic[i].name}    Ca si:${indexAlbum.listMusic[i].singer}      Ma bai hat:${indexAlbum.listMusic[i].id}`)
    }
}

function removeMusic() {
    let choice = +input.question('Nhap vi tri bai hat muon xoa:')
    indexAlbum.listMusic.splice(choice - 1, 1,)
}

main()

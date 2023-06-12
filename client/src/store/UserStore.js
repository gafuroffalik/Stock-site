import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = false
        this._user = {}
        this._role = ""
        this._id = 0
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    setRole(string){
        this._role = string
    }

    setId(id){
        this._id = id
    }

    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }

    get getRole(){
        return this._role
    }

    get getId(){
        return this._id
    }
}
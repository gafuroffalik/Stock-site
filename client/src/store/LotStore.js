import {makeAutoObservable} from "mobx";

export default class LotStore{
    constructor() {
        this._lots = []
        makeAutoObservable(this)
    }

    setLots(lots){
        this._lots = lots
    }

    get lots(){
        return this._lots
    }
}
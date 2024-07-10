import { makeAutoObservable } from "mobx";
import { IProductItem } from "../types/types";
import sushiItems from "../sushiData";

class SushiStore {
    sushi:IProductItem[] = sushiItems;

    constructor(){
        makeAutoObservable(this)
    }

    get items(): any {
        let sortedItems = [...this.sushi];
        return  sortedItems
    }
}

export default new SushiStore
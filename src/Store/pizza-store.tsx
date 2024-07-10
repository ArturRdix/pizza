import { makeAutoObservable } from "mobx";
import pizzaItems from "../pizzaData";
import { IProductItem } from "../types/types";

class PizzaStore {
    pizza: IProductItem[] = pizzaItems;

    constructor() {
        makeAutoObservable(this)
    }

    get items(): any {
        let sortedItems = [...this.pizza];
        return  sortedItems
    }

}

export default new PizzaStore
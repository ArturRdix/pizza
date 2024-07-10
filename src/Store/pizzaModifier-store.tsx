import { makeAutoObservable } from "mobx";
import pizzaModifiers from "../modifierPizzaData";
import { IPizzaModifier } from "../types/types";
import currentItem from "./current-item";

class PizzModifierStore {
    modifierItems:IPizzaModifier[] = pizzaModifiers;

    constructor() {
        makeAutoObservable(this)
    }

    incrementQuantity = (itemId: number) => {
        const index = this.modifierItems.findIndex((item: any) => item.id === itemId);
        if (index !== -1) {
            this.modifierItems[index].quantity += 1;
            currentItem.addModify(this.modifierItems[index])
        }
    }

    decrementQuantity = (itemId: number) => {
        const index = this.modifierItems.findIndex((item: any) => item.id === itemId);
        if (index !== -1 && this.modifierItems[index].quantity > 0) {
            this.modifierItems[index].quantity -= 1;
            currentItem.addModify(this.modifierItems[index])
        }
    }

    removeQuantity=(itemId: number)=>{
        const index = this.modifierItems.findIndex((item: any) => item.id === itemId);
        this.modifierItems[index].quantity = 0;
        currentItem.removeModify(this.modifierItems[index])
    }
}

export default new PizzModifierStore;

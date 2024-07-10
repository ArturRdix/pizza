import { makeAutoObservable } from "mobx"
import { ICurrentProductPizza, IPizzaModifier } from "../types/types"
import pizzaModifierStore from "./pizzaModifier-store"

class CurrentItemProduct {
    currentItem: ICurrentProductPizza = {
        name: "",
        weight: "",
        desc: "",
        price: 0,
        img: "",
        id: 0,
        idOrder: "",
        quantity: 0,
        modify: []
    }

    constructor() {
        makeAutoObservable(this)
    }

    addModify = (itemModify: IPizzaModifier): void => {
        const currentModifyItem = pizzaModifierStore.modifierItems.find(item => item.id === itemModify.id);

        if (currentModifyItem && this.currentItem.modify) {
            const index = this.currentItem.modify.findIndex(modify => modify.id === itemModify.id);
            if (index !== -1) {
                this.currentItem.modify[index].quantity = itemModify.quantity;
            } else {
                this.currentItem.modify.push({
                    ...currentModifyItem,
                    quantity: itemModify.quantity
                });
            }
        }
    };

    removeModify = (itemModify: IPizzaModifier): void => {
        if (this.currentItem.modify) {
            const index = this.currentItem.modify.findIndex(modify => modify.id === itemModify.id);
            if (index !== -1) {
                this.currentItem.modify.splice(index, 1);
            }
        }
    };

    totalPriceCurrentItem = (item: ICurrentProductPizza): number => {
        if (item.price && item.modify) {
            return (
                item.price * item.quantity +
  (item.modify ? item.modify.reduce((sum, elem) => sum + elem.price * elem.quantity, 0) * item.quantity : 0)

            );
        }
        if (item.price && !item.modify) {
            return (
                item.price * item.quantity
            );
        }
        return 0;
    }



    incrementQuantity = (): void => {
        this.currentItem.quantity += 1
    }

    decrementQuantity = (): void => {
        this.currentItem.quantity -= 1
    }

}

export default new CurrentItemProduct();
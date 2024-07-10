import { makeAutoObservable } from "mobx"
import pizzaStore from "./pizza-store"
import currentItem from "./current-item"
import pizzaModifierStore from "./pizzaModifier-store"
import sushiStore from "./sushi-store"

class ModalActive {
    isActive: boolean = false

    constructor() {
        makeAutoObservable(this)

    }

    openModal = (id: number) => {
        const pizzaItem = pizzaStore.pizza.find(e => e.id === id);
        if (pizzaItem) {
            currentItem.currentItem = {
                ...pizzaItem,
                quantity: 1,
                modify: [],
                idOrder: ''
            };
            this.isActive = true;
        }
        const sushiItem = sushiStore.sushi.find(e => e.id === id);
        if (sushiItem) {
            currentItem.currentItem = {
                ...sushiItem,
                quantity: 1,
                modify: undefined,
                idOrder: ''
            };
            this.isActive = true;
        }
    }

    closeModal = () => {
        this.isActive = false;
        currentItem.currentItem = {
            name: "",
            weight: "",
            desc: "",
            price: 0,
            img: "",
            id: 0,
            quantity: 0,
            idOrder: '',
            modify: []
        };
        pizzaModifierStore.modifierItems.forEach(modifier => {
            modifier.quantity = 0;
        });
    }
}

export default new ModalActive();
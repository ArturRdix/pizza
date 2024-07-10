import { makeAutoObservable } from "mobx";
import { ICurrentProductPizza } from "../types/types";
import modalActive from "./modal-active";

class OrderStore {
    orders: ICurrentProductPizza[] = [];
    cartIsActive = false;

    constructor() {
        makeAutoObservable(this);
        
    }

    addToOrder = (item: ICurrentProductPizza) => {
        item.idOrder = this.getOrderId(item)
        const existingOrderIndex = this.orders.findIndex(order => order.idOrder === item.idOrder);

        if (existingOrderIndex === -1) {
            this.orders.push(item);
        } else {
            this.orders[existingOrderIndex].quantity += 1;
        }

        modalActive.closeModal();

    };

    getOrderId = (item: ICurrentProductPizza): string => {
        if (item.modify) {
            item.modify.sort((a, b) => a.id - b.id);
            let curretnId = item.id + ''
            curretnId += '|' + item.modify.reduce((acc, m) => acc += '|' + m.id + '|' + m.quantity, '');
            return curretnId
        }
        else { return `${item.id}` }
    }

    removeOrder = (idOrder: string) => {
        const currentItem = this.orders.find((elem) => elem.idOrder === idOrder)
        if (currentItem) {
            currentItem.quantity += 1
        }
    }

    incrementOrderQuantity = (idOrder: string) => {
        const currentItem = this.orders.find((elem) => elem.idOrder === idOrder)
        if (currentItem) {
            currentItem.quantity += 1
        }
    }

    decrementOrderQuantity = (idOrder: string) => {
        const currentItem = this.orders.find((elem) => elem.idOrder === idOrder)
        if (currentItem) {
            currentItem.quantity -= 1
        }
    }


};

export default new OrderStore();

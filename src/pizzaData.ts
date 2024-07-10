import { IProductItem } from "./types/types";

const pizzaItems:IProductItem[] = [
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        img:'./dist/img/pizza.png',
        id:0
    },
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        // img:'./img/pizza.png',/dist/img/
        img:'./dist/img/pizza.png',
        id:0
    },
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        img:'./dist/img/pizza.png',
        id:0
    },
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        img:'./dist/img/pizza.png',
        id:0
    },
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        img:'./dist/img/pizza.png',
        id:0
    },
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        img:'./dist/img/pizza.png',
        id:0
    },
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        img:'./dist/img/pizza.png',
        id:0
    },
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        img:'./dist/img/pizza.png',
        id:0
    },
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        img:'./dist/img/pizza.png',
        id:0
    },
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        img:'./dist/img/pizza.png',
        id:0
    },
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        img:'./dist/img/pizza.png',
        id:0
    },
    {
        name: 'ЧЕТЫРЕ СЫРА',
        weight: '340 г',
        desc: 'Сливочный соус, сыр моцарелла, дорблю, фета, пармезан, итальянские травы',
        price: 300,
        img:'./dist/img/pizza.png',
        id:0
    },
]

function addId() {
    let idCount = 1;

    pizzaItems.map(e => {
        e.id = idCount;
        idCount++
    })
}addId();
export default pizzaItems;
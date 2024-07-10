import { IProductItem } from "./types/types";

const sushiItems:IProductItem[] = [
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
    {
        name: 'Филадельфия сет',
        weight: '645 г',
        desc: 'Филадельфия лосось, филадельфия угорь, филадельфия тунец',
        price: 555,
        img:'./dist/img/sushi.png',
        id:0
    },
]

function addId() {
    let idCount = 200;

    sushiItems.map(e => {
        e.id = idCount;
        idCount++
    })
}addId();
export default sushiItems;
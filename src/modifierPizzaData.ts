import { IPizzaModifier } from "./types/types";

const pizzaModifiers: IPizzaModifier[] = [
    {
        name: "Пепперони",
        quantity: 0,
        price: 50,
        id: 0
    },
    {
        name: "Грибы",
        quantity: 0,
        price: 40,
        id: 0
    },
    {
        name: "Оливки",
        quantity: 0,
        price: 30,
        id: 0
    },
    {
        name: "Помидоры",
        quantity: 0,
        price: 30,
        id: 0
    },
    {
        name: "Перец",
        quantity: 0,
        price: 20,
        id: 0
    },
    {
        name: "Лук",
        quantity: 0,
        price: 20,
        id: 0
    },
    {
        name: "Ветчина",
        quantity: 0,
        price: 50,
        id: 0
    },
    {
        name: "Салями",
        quantity: 0,
        price: 50,
        id: 0
    },
    {
        name: "Курица",
        quantity: 0,
        price: 40,
        id: 0
    },
    {
        name: "Бекон",
        quantity: 0,
        price: 50,
        id: 0
    },
    {
        name: "Тунец",
        quantity: 0,
        price: 60,
        id: 0
    },
    {
        name: "Креветки",
        quantity: 0,
        price: 70,
        id: 0
    }
];

function addId() {
    let idCount = 1;

    pizzaModifiers.map(e => {
        e.id = idCount;
        idCount++
    })
}
addId();

export default pizzaModifiers
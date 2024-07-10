export interface IProductItem {
    name: string;
    weight: string;
    desc: string;
    price: number;
    img: string;
    id: number;
}

export interface IPizzaModifier {
    name: string;
    price: number;
    quantity: number;
    id: number;
}
export interface ICurrentProductPizza {
    name: string;
    weight: string;
    desc: string;
    price: number;
    img: string;
    id: number;
    idOrder: string;
    quantity: number;
    modify: IPizzaModifier[] | undefined;
}
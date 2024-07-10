import { FC } from 'react';
import { IPizzaModifier } from '../../types/types';
import MyButton from '../UI/MyButton';
import './CartItems.scss'

interface CartItemsProps {
    name: string,
    modify?: IPizzaModifier[],
    price: number,
    quantity: number,
    id: string,
    img: string,
    increment: (id: string) => void,
    decrement: (id: string) => void
}

const CartItems: FC<CartItemsProps> = ({ name, modify, price, quantity, id, increment, decrement, img }) => {
    return (
        <div className='cart-item'>

            <div className="div-cart-left">
                <div className="cart-img-order">
                    <img src={img} alt="" />
                </div>
                <div className="cart-info-order">
                    <h2>{name}</h2>
                    {modify && <div className="cart-modify-items">
                        {(modify.length > 0) && modify.map(e => (<span>{e.quantity}x {e.name}</span>))}
                    </div>}
                    <div className="price-block">
                        {modify
                            ? <h3>{(modify.reduce((acc, e) => (acc + (e.price * e.quantity)), 0) * quantity) + (price * quantity)}                            ₴</h3>
                            : <h3>{price * quantity} ₴</h3>}
                        <div className="regular-quantity">
                            <MyButton disabled={quantity <= 1} width='25px' height='25px' value='-' onClick={() => decrement(id)} />
                            <span>{quantity}</span>
                            <MyButton width='25px' height='25px' value='+' onClick={() => increment(id)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-cart-right">

            </div>
        </div>
    );
}

export default CartItems;
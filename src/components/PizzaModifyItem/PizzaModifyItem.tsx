import{ FC } from 'react';
import './PizzaModifyItem.scss'
import { FaCheck } from "react-icons/fa";
import MyButton from '../UI/MyButton';

interface PizzaModifyItemProps {
    name: string;
    quantity: number;
    price: number;
    id: number;
    removeQuantity: (id: number) => void;
    increment: (id: number) => void;
    decrement: (id: number) => void;
}
const PizzaModifyItem: FC<PizzaModifyItemProps> = ({ name, quantity, price, increment, decrement, id, removeQuantity }) => {
    return (
        <div className={`modify-block ${quantity >= 1 ? 'active' : ''}`}>
            <div className="left-block">
                <FaCheck
                    className={`check-modify ${quantity > 0 ? 'active' : ''}`}
                    onClick={quantity <= 0 ? () => increment(id) : () => removeQuantity(id)}

                />
                <h3>{name}</h3>
            </div>
            <div className="right-block">
                {quantity <= 0
                    ? <span>{price}</span>
                    : <>
                        <MyButton width='30px' height='30px' value='-' onClick={() => decrement(id)} />
                        <span>{quantity}</span>
                        <MyButton width='30px' height='30px' value='+' onClick={() => increment(id)} />
                    </>}

            </div>
        </div>
    );
}

export default PizzaModifyItem;
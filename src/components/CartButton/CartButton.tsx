import { observer } from 'mobx-react-lite';
import './CartButton.scss'
import ordersStore from '../../Store/orders-store';

const CartButton = observer(() => {
    return (
        ordersStore.orders.length > 0 && <div className='cart' onClick={() => { ordersStore.cartIsActive = true }}>
            <button className="cart-btn">
                <span className='car-btn-quant'>В кошику: {ordersStore.orders.length}</span>
                <span className='car-btn-price'>{ordersStore.orders.reduce((sum, el) => {
                    let orderTotal = el.price * el.quantity;
                    if (el.modify) {
                        const modifyTotal = el.modify.reduce((innerSum, modify) => innerSum + (modify.price * modify.quantity), 0);
                        orderTotal += modifyTotal * el.quantity;
                    }
                    return sum + orderTotal;
                }, 0)} ₴</span>


            </button>
        </div>
    );
})

export default CartButton;
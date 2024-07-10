import './Cart.scss'
import ordersStore from '../../Store/orders-store';
import CartList from '../CartList/CartList';
import { observer } from 'mobx-react';

const Cart = observer(() => {

    return (
        <div className={`cart-wrapper ${ordersStore.cartIsActive ? 'active' : ''}`}>
            <div className="cart-content">
                <div className='cart-title'>
                    <h2>Корзина</h2>
                    <span className="close" onClick={() => ordersStore.cartIsActive = false}>&times;</span>
                </div>
                <CartList />
                <div className="pay-block">
                    <div className="pay-info">
                        <h3>Всього до сплати:</h3>
                        <h3>{ordersStore.orders.reduce((totalSum, order) => {
                            let orderTotal = order.price * order.quantity;
                            if (order.modify) {
                                const modifyTotal = order.modify.reduce((innerSum, modify) => innerSum + modify.price * modify.quantity, 0);
                                orderTotal += modifyTotal * order.quantity;
                            }
                            return totalSum + orderTotal;
                        }, 0)} ₴</h3>


                    </div>
                    <button>Замовити</button>
                </div>
            </div>
            <div className="cart-bg"></div>
        </div>
    );
})

export default Cart;
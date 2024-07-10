
import { observer } from 'mobx-react-lite';
import CartItems from '../CartItems/CartItems';
import ordersStore from '../../Store/orders-store';
import './CartList.scss'

const CartList = observer(() => {
    return (
        <div className='cart-container'>
            {ordersStore.orders.map(e => (
                <CartItems 
                img={e.img}
                increment={ordersStore.incrementOrderQuantity}
                decrement={ordersStore.decrementOrderQuantity}
                key={e.idOrder} 
                id={e.idOrder} 
                name={e.name} 
                price={e.price} 
                modify={e.modify} 
                quantity={e.quantity} />
            ))}
        </div>
    );
})

export default CartList;
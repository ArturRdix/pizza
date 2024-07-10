
import './PizzaModifyList.scss'
import PizzaModifyItem from '../PizzaModifyItem/PizzaModifyItem';
import pizzaModifierStore from '../../Store/pizzaModifier-store';
import { observer } from 'mobx-react-lite';

const PizzaModifyList = observer(() => {
    return (
        <div className='modify-list'>
            {
                pizzaModifierStore.modifierItems.map(e => (
                    <PizzaModifyItem
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        price={e.price}
                        quantity={e.quantity}
                        increment={pizzaModifierStore.incrementQuantity}
                        decrement={pizzaModifierStore.decrementQuantity}
                        removeQuantity={pizzaModifierStore.removeQuantity} />
                ))
            }
        </div>
    );
})

export default PizzaModifyList;
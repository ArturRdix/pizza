import { useEffect, useRef } from 'react';
import './ItemModal.scss';
import currentItem from '../../Store/current-item';
import modalActive from '../../Store/modal-active';
import { observer } from 'mobx-react-lite';
import MyButton from '../UI/MyButton';
import PizzaModifyList from '../PizzaModifyList/PizzaModifyList';
import ordersStore from '../../Store/orders-store';

const ItemModal = observer(() => {
    const contentMainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentMainRef.current && modalActive.isActive) {
            contentMainRef.current.scrollTop = 0;
        }
    }, [modalActive.isActive])
    return (
        <div className={`modal-item-wrapper ${modalActive.isActive ? 'active' : ''}`} onClick={e => e.stopPropagation}>
            <div className="modal-content">
                <span className="close" onClick={modalActive.closeModal}>&times;</span>
                <div className="modal-content-main" ref={contentMainRef}>
                    <img src={currentItem.currentItem.img} alt="" />
                    <h2>{currentItem.currentItem.name}</h2>
                    <p>{currentItem.currentItem.desc}</p>
                    <span className='weight'>{currentItem.currentItem.weight}</span>
                    {currentItem.currentItem.modify && <PizzaModifyList />}
                </div>

                <div className="add-cart-block">
                    <div className="quantity-regul">
                        <MyButton disabled={currentItem.currentItem.quantity === 1} value='-' onClick={() => currentItem.decrementQuantity()} />
                        <span>{currentItem.currentItem.quantity}</span>
                        <MyButton value='+' onClick={() => currentItem.incrementQuantity()} />
                    </div>
                    <button className='add-cart-btn' onClick={() => ordersStore.addToOrder(currentItem.currentItem)}>
                        Додати: {currentItem.totalPriceCurrentItem(currentItem.currentItem)} ₴
                    </button>


                </div>
            </div>
            <div className="modal-bacground"></div>
        </div>
    );
})

export default ItemModal;

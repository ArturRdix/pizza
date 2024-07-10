import { observer } from 'mobx-react-lite';
import React from 'react';
import './ProductItem.scss'
import modalActive from '../../Store/modal-active';

interface ProductItemProps {
    name: string;
    descr: string;
    weight: string;
    price: number;
    img: string;
    id: number;
}

const ProductItem: React.FC<ProductItemProps> = observer(({ name, descr, weight, price, img, id }) => {


    return (
        <article onClick={() => modalActive.openModal(id)}>
            <div className="img-block">
                <img className='img-item' src={img} alt="" />
            </div>
            <div className="main-info">
                <h2>{name} {id}</h2>
                <p>{descr}</p>
                <span>{weight}</span>
                <h3>{price} ₴</h3>
            </div>
            <div className="add-cart">
                <button className="add-cart-btn">
                    +
                </button>
            </div>
        </article>
    );
})

export default ProductItem;
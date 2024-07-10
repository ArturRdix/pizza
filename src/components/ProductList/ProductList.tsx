import React from 'react';
import { observer } from 'mobx-react-lite';
import './ProductList.scss'
import ProductItem from '../ProductItem/ProductItem';
import { IProductItem } from '../../types/types';

interface ProductListProps {
    product: IProductItem[]
}

const ProductList: React.FC<ProductListProps> = observer(({ product }) => {

    return (
        <section className='__container'>
            <div className="items-list">
                {product.map((item) => (
                    <ProductItem name={item.name} descr={item.desc} weight={item.weight} price={item.price} img={item.img} key={item.id} id={item.id} />
                ))}
            </div>
        </section>
    );
})

export default ProductList;
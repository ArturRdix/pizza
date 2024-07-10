import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { observer } from 'mobx-react';
import sushiStore from '../Store/sushi-store';
import Pagintation from '../components/Pagintation/Pagintation';
import SpinLoading from '../components/UI/SpinLoading/SpinLoading';

const SushiPage = observer(() => {
    const [currentPage, setCurrentPage] = useState(0); // Текущая страница
    const [itemsPerPage] = useState(6); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Разделение списка товаров на страницы
    const offset = currentPage * itemsPerPage;
    const currentPageItems = sushiStore.items.slice(offset, offset + itemsPerPage);

    // Обработчик изменения страницы
    const handlePageChange = ({ selected }: any): void => {
        setCurrentPage(selected);
        window.scrollTo(0, 0)
    };

    if (loading) {
        return (
          <SpinLoading/>
        );
      }
    
    return (
        <>
            <ProductList product={currentPageItems} />
            <Pagintation
                itemsLength={sushiStore.items.length}
                itemsPerPage={itemsPerPage}
                handlePageChange={handlePageChange} />

        </>
    );
})

export default SushiPage;
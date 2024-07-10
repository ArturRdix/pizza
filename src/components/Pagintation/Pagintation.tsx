import { FC } from 'react';
import './Pagintation.scss'
import ReactPaginate from 'react-paginate';
import ordersStore from '../../Store/orders-store';

interface PaginationProps {
    itemsLength: any
    itemsPerPage: any
    handlePageChange: any
}

const Pagintation: FC<PaginationProps> = ({ itemsLength, itemsPerPage, handlePageChange }) => {
    return (
        <div className={`paginaton__container ${ordersStore.orders.length > 0 ? 'active' : ''}`} >
            <ReactPaginate
                className='pagination'
                pageCount={Math.ceil(itemsLength / itemsPerPage)}
                pageRangeDisplayed={1} // Устанавливаем значение 2 для отображения только текущей и соседних страниц
                marginPagesDisplayed={2} // Устанавливаем значение 2 для отображения только двух страницы слева и справа от текущей
                onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="active"
                breakLabel="..."
                previousLabel="< Перед."
                nextLabel="След. >"
            /></div>

    );
}

export default Pagintation;
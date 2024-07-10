import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import pizzaStore from '../Store/pizza-store';
import Pagintation from '../components/Pagintation/Pagintation';
import SpinLoading from '../components/UI/SpinLoading/SpinLoading';

const PizzaPage = () => {
  const [currentPage, setCurrentPage] = useState(0); // Текущая страница
  const [itemsPerPage] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  // Разделение списка товаров на страницы
  const offset = currentPage * itemsPerPage;
  const currentPageItems = pizzaStore.items.slice(offset, offset + itemsPerPage);

  // Обработчик изменения страницы
  const handlePageChange = ({ selected }: any): void => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  // Если данные загружаются, показываем экран загрузки
  if (loading) {
    return (
      <SpinLoading/>
    );
  }

  // Иначе отображаем список товаров и пагинацию
  return (
    <>
      <ProductList product={currentPageItems} />
      <Pagintation
        itemsLength={pizzaStore.items.length}
        itemsPerPage={itemsPerPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}

export default PizzaPage;

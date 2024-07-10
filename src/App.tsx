import './App.scss';
import { Header } from './components/Header/Header.js';
import CartButton from './components/CartButton/CartButton.js';
import ItemModal from './components/ItemModal/ItemModal.js';
import Cart from './components/Cart/Cart.js';
import { Route, Routes } from 'react-router-dom';
import PizzaPage from './Pages/PizzaPage.js';
import SushiPage from './Pages/SushiPage.js';
import MainPage from './Pages/MainPage.js';

export const App = () => {
  return (
    <>
      <Header />
      <ItemModal />
      <Cart />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/pizza' element={<PizzaPage />} />
        <Route path='/sushi' element={<SushiPage />} />
      </Routes>
      <CartButton />
    </>
  )
}


import { useState, useEffect} from 'react';
import './Header.scss';
import { FaPizzaSlice } from "react-icons/fa";
import { BiSolidSushi } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { observer } from 'mobx-react-lite';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from '../UI/BurgerMenu/BurgerMenu';

export const Header = observer(() => {
    const [burgerActive, setBurgerActive] = useState(false);
    const deActiveMenu = () => {
        burgerActive ? setBurgerActive(false) : setBurgerActive(true);
    }
    const location = useLocation();
    useEffect(()=>{
        setBurgerActive(false)
    },[location.pathname])
    

    const isActive = (path: any) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className='header'>
            <div className="header__container">
                <nav className="header__nav">
                       {/* <div className='phone-item'>
                            <a href="tel:+380989769883"><IoIosCall className='phone-icon' /></a>
                        </div>   */}
                    <a className='header__logo' href="/">
                        <img src="./img/logo.png" alt="logo" />
                        LOVELY</a>
                    <BurgerMenu isActivemenu={burgerActive} deActiveMenu={deActiveMenu} />
                    <ul className={`header__list ${burgerActive ? 'active' : ''}`}>
                        <li className={`header__list-item ${isActive('/pizza')}`}>
                            <FaPizzaSlice />
                            <Link to='/pizza'>Піцца</Link>
                        </li>
                        <li className={`header__list-item ${isActive('/sushi')}`}>
                            <BiSolidSushi />
                            <Link to='/sushi'>Суші</Link>
                        </li>
                        <li className='phone-item'>
                            <a href="tel:+380989769883"><IoIosCall className='phone-icon' />098-976-98-83</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
});

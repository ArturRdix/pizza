import React from 'react';
import './BurgerMenu.scss'

interface BurgerMenuProps {
  isActivemenu: boolean,
  deActiveMenu: () => void
}

const BurgerMenu:React.FC<BurgerMenuProps> = ({ isActivemenu, deActiveMenu }) => {
  return (
    <div
      onClick={deActiveMenu}
      className={`burger-menu ${isActivemenu ? 'active' : ''}`} >
      <span className={`middle-line ${isActivemenu ? 'active' : ''}`}></span>
    </div>
  );
}

export default BurgerMenu;
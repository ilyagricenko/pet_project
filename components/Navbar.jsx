import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import NavItem from './NavItem';

const MENU_LIST = [
  {
    text: "Головна",
    href: "/",
  },
  {
    text: "О нас",
    href: "/About",
  },
  {
    text: "Контаки",
    href: "/Contact",
  },
  {
    text: "Магазин",
    href: "/",
  },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0)
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Happy Corg</Link>
        <a onClick={() => setActiveIdx(0)}></a>
      </p>

      <div onClick={() => setNavActive(!navActive)} className="nav__menu-bar">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`${navActive ? "active": ""} nav__menu-list`}>
        {MENU_LIST.map((menu, idx) => {
          return (
            <div onClick={() => {
              setActiveIdx(idx); 
              setNavActive(false);
              }} 
              key={menu.text}>
              <NavItem active = {activeIdx === idx} {...menu} />
            </div>
          )
        })}
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
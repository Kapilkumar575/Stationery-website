import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown_icon.png'

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const menuRef = useRef();
   const dropdown_toggle = (e) =>{
          menuRef.current.classList.toggle('nav-menu-visible');
          e.target.classList.toggle('open');
   }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='Navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>Notenock</p>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img className='nav-dropdown' onclick={dropdown_toggle} src={nav_dropdown}alt="" />
      <ul ref={menuRef}className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => { setMenu("Shop"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Writing Instruments"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to='/Writing Instruments'>Writing Instruments</Link>
          {menu === "Writing Instruments" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Paper Products"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to='/Paper Products'>Paper Products</Link>
          {menu === "Paper Products" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Organizational Supplies"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to='/Organizational Supplies'>Organizational Supplies</Link>
          {menu === "Organizational Supplies" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Art Supplies"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to='/Art Supplies'>Art Supplies</Link>
          {menu === "Art Supplies" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Adhesives"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to='/Adhesives'>Adhesives</Link>
          {menu === "Adhesives" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Desk Accessories"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to='/Desk Accessories'>Desk Accessories</Link>
          {menu === "Desk Accessories" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("Miscellaneous"); toggleMenu(); }}>
          <Link style={{ textDecoration: 'none' }} to='/Miscellaneous'>Miscellaneous</Link>
          {menu === "Miscellaneous" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="./login"><button>Login</button></Link>
        <Link to='./cart'><img src={cart_icon} alt="Cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <Link to="/"><i className="material-icons">menu</i> </Link>
      <h3>Bootcamp Ecommerce</h3>
      <Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
    </header>
  );
}

export default Header;
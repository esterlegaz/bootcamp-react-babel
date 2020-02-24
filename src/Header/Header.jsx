import React from 'react';
import './Header.scss';

function Header() {
    return (
      <header className="header">
          <i className="material-icons">menu</i>
          <h3>Bootcamp Ecommerce</h3>
          <i className="material-icons">shopping_cart</i>
      </header>
    );
  }

export default Header;
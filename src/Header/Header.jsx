import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  return (
    <AppBar position="fixed" color="primary" className="header">
      <Toolbar>
        <Link to="/">
          <IconButton color="secondary" edge="start" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
        </Link>
        <h3 className="header__title">Bootcamp Ecommerce</h3>
        <Link to="/cart">
          <IconButton color="secondary" edge="end" aria-label="open drawer">
            <ShoppingCartIcon />
          </IconButton>
        </Link>
        <div className="blue" />


      </Toolbar>
    </AppBar>
  );
}

export default Header;
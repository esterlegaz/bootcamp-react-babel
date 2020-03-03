import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="primary" className="header">
      <Toolbar>
        <IconButton color="secondary" edge="start" aria-label="open drawer" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/" style={{ textDecoration: 'none', color: '#c2185b' }}>
            <MenuItem onClick={handleClose}>
              <i className="material-icons ">view_list</i>
            </MenuItem>
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none', color: '#c2185b' }}>
            <MenuItem onClick={handleClose}>
              <i className="material-icons ">shopping_cart</i>
            </MenuItem>
          </Link>
        </Menu>

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
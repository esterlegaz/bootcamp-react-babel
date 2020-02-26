import React from 'react';
import './BtnProducts.scss';

function BtnProducts(props) {
  return <button className="product__btn" onClick={props.handleClick}>{props.text}</button>
}

export default BtnProducts;
import React, { Fragment } from 'react';
import './ProductsCart.scss';
import ProductsList from './../ProductsList/ProductsList.jsx';
import * as ProductService from './../Services/ProductsService';

const removeFromCart = "remove from cart";

function ProductsCart(props) {
    return (
        <Fragment>
            <h1 className="products__title">Cart Products</h1>
            <ProductsList handleIsGrid={props.handleIsGrid} handleIsNotGrid={props.handleIsNotGrid} isGrid={props.isGrid} handleClick={ProductService.removeFromCart} productList={ProductService.listCartProducts} text={removeFromCart} />
        </Fragment>
    )

}

export default ProductsCart;
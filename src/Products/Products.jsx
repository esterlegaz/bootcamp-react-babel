import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import './Products.scss';
import ProductsList from './../ProductsList/ProductsList.jsx';
import * as ProductService from './../Services/ProductsService';

const addToCart = "add to cart";
function Products(props) {
    return (
        <Fragment>
            <h1 className="products__title">Products</h1>
            <Link to="/add"><div>FORMULARIO</div> </Link>
            <ProductsList handleIsGrid={props.handleIsGrid} handleIsNotGrid={props.handleIsNotGrid} isGrid={props.isGrid} handleClick={ProductService.addToCart} productList={ProductService.listProducts()} text={addToCart} />
        </Fragment>
    )
}

export default Products;
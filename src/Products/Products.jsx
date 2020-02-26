import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import './Products.scss';
import ProductsList from './../ProductsList/ProductsList.jsx';
import * as ProductService from './../Services/ProductsService';

const addToCart = "add to cart";
function Products(props) {
    return (
        <Fragment>
            <h1 className="products__title">Products</h1>
            <Link to="/add">
                <div className="products__add--icon">
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </div>
            </Link>
            <ProductsList handleIsGrid={props.handleIsGrid} handleIsNotGrid={props.handleIsNotGrid} isGrid={props.isGrid} handleClick={ProductService.addToCart} productList={ProductService.listProducts()} text={addToCart} />
        </Fragment>
    )
}

export default Products;
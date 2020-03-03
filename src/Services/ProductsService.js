import ProductsMock from './../Mocks/products-mock';
import ProductsCartMock from './../Mocks/products-cart';

const BASE_URL = 'https://us-central1-gil-bootcamp-angular.cloudfunctions.net/';
const PRODUCTS = ProductsMock;
const CART_PRODUCTS = ProductsCartMock;

export const listProducts = () => {
    return fetch(BASE_URL + 'getProducts/ester-legaz')
        .then(res => {
            return res.json();
        })
}

export const listCartProducts = () => {
    return fetch(BASE_URL + 'getShoppingCarProducts/ester-legaz')
        .then(res => {
            return res.json();
        })
}

export const addToCart = (product) => {
    const method = {
        method: 'POST',
        body: JSON.stringify({ id: product.id }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(BASE_URL + 'addProductToShoppingCar/ester-legaz', method);
}

export const removeFromCart = (cartProduct) => {
    const method = {
        method: 'DELETE'
    }
    return fetch(BASE_URL + 'deleteFromShoppingCar/ester-legaz?id=' + cartProduct.id, method);
}

export const addProduct = (product) => {
    product.id = PRODUCTS.length + 1;
    product.image = 'https://picsum.photos/id/' + product.id + '/300/300';
    product.createdAt = new Date();
    PRODUCTS.push(product);
    const method = {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(BASE_URL + 'addProduct/ester-legaz', method)
};

function createPromise(value) {
    return new Promise(resolve =>
        setTimeout(() => resolve(value), 1000))
}
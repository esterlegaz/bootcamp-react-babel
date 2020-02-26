import ProductsMock from './../Mocks/products-mock';
import ProductsCartMock from './../Mocks/products-cart';

const PRODUCTS = ProductsMock;
const CART_PRODUCTS = ProductsCartMock;

export const listProducts = () => {
    return PRODUCTS;
}

export const listCartProducts = () => {
    return CART_PRODUCTS;
}

export const addToCart = (product) => {
    CART_PRODUCTS.push(product);
    return product;
}

export const removeFromCart = (cartProduct) => {
    const productToRemove = CART_PRODUCTS.findIndex(product => product.id === cartProduct.id);
    CART_PRODUCTS.splice(productToRemove, 1);
}

export const addProduct = (product) => {
    product.id = PRODUCTS.length + 1;
    product.image = 'https://picsum.photos/id/' + product.id + '/300/300';
    product.createdAt = new Date();
    PRODUCTS.push(product);
};
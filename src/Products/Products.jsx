import React, { Fragment } from 'react';
import './Products.scss';

const button = <button className="product__btn">add to cart</button>;

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGrid: false
        };
    }

    render() {
        const icons = (
            <div className="product__icons">
                <i className={"product__icon material-icons " + (!this.state.isGrid ? 'product__icon--selected' : '')} onClick={() => this.setState({ isGrid: false })}>view_list</i>
                <i className={"product__icon material-icons " + (this.state.isGrid ? 'product__icon--selected' : '')} onClick={() => this.setState({ isGrid: true })}>view_module</i>
            </div>
        );
        const product = this.props.productList.map(product => {
            return (
                <Fragment key={product.id}>
                    <li className={`product__item ${!this.state.isGrid ? 'product__item--flex' : ''}`}>
                        <img src={product.image} alt={product.name} />
                        <div className={`${!this.state.isGrid ? 'product__info' : ''}`}>
                            <h2 className="product__title">{product.name}</h2>
                            {!this.state.isGrid && (
                                <p>({product.createdAt.toLocaleDateString()}) - {product.description}</p>
                            )}
                            <p className="product__price">{product.price}€</p>
                            {button}
                        </div>
                    </li>
                </Fragment>
            );
        });
        return (
            <div className="products__list">
                {icons}
                <h1 className="products__title">Products</h1>
                <ul className={`${this.state.isGrid ? 'products__grid' : ''}`}>{product}</ul>
            </div>
        );
    }
}

export default Products;
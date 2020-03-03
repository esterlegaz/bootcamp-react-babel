import React from 'react';
import './ProductsList.scss';
import BtnProducts from './../BtnProducts/BtnProducts.jsx';
import { ReactComponent as Spinner } from './../assets/img/spinning-circles.svg';

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: true,
            products: []
        };

        this.handleProductInteraction = this.handleProductInteraction.bind(this);

    }
    handleProductInteraction(product) {
        this.setState({
            isLoading: true
        });
        this.props.handleClick(product).then(data => {
            this.props.productList()
                .then(
                    (products) => {
                        this.setState({
                            isLoading: false,
                            products
                        });
                    },

                    (error) => {
                        this.setState({
                            isLoading: false,
                            error
                        });
                    }
                )
        });
    }

    componentDidMount() {
        this.props.productList()
            .then(
                (result) => {
                    this.setState({
                        isLoading: false,
                        products: result
                    });
                },

                (error) => {
                    this.setState({
                        isLoading: false,
                        error
                    });
                }
            )
    }

    render() {
        function checkMobileDevice() {
            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
        };
        const isMobile = checkMobileDevice();

        const renderIcons = () => {
            if (!isMobile) {
                return (
                    <div className="product__icons">
                        <i className={"product__icon material-icons " + (!this.props.isGrid ? 'product__icon--selected' : '')} onClick={this.props.handleIsNotGrid}>view_list</i>
                        <i className={"product__icon material-icons " + (this.props.isGrid ? 'product__icon--selected' : '')} onClick={this.props.handleIsGrid}>view_module</i>
                    </div>
                )
            }
        };
        if (this.state.isLoading) {
            return <Spinner className="product__spinner" />
        } else if (this.state.products) {
            const product = this.state.products.map(product => {
                return (
                    <li key={product.id} className={`product__item ${!this.props.isGrid && !isMobile ? 'product__item--flex' : ''}`}>
                        <img src={product.image} alt={product.name} />
                        <div className={`${!this.props.isGrid ? 'product__info' : ''}`}>
                            <h2 className="product__title">{product.name}</h2>
                            {!this.props.isGrid && (
                                <p>({new Date(product.createdAt).toLocaleDateString()}) - {product.description}</p>
                            )}
                            <p className="product__price">{product.price}€</p>
                            <BtnProducts handleClick={() => this.handleProductInteraction(product)} text={this.props.text} />
                        </div>
                    </li>
                )
            })
            return (
                <div className="products__list">
                    {renderIcons()}
                    <ul className={`${this.props.isGrid ? 'products__grid' : ''}`}>{product}</ul>
                </div>
            )
        } else return <p>Error</p>

    }
}

export default ProductsList;
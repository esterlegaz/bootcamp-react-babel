import React from 'react';
import './AddProductsForm.scss';
import * as ProductService from './../Services/ProductsService';
import TextField from '@material-ui/core/TextField';
import BtnProducts from './../BtnProducts/BtnProducts.jsx';

class AddProductsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            description: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        ProductService.addProduct(this.state);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const field = target.name;

        this.setState({
            [field]: value
        });
    }

    render() {
        return (
            <form className="products__form">
                <div className="products__form--input">
                    <TextField
                        required
                        name="name"
                        variant="outlined"
                        label="Name"
                        defaultValue={this.state.name}
                        onKeyUp={this.handleChange} />
                </div>
                <div className="products__form--input">
                    <TextField
                        required
                        type="number"
                        name="price"
                        variant="outlined"
                        label="Price"
                        defaultValue={this.state.price}
                        onKeyUp={this.handleChange} />
                </div>
                <div className="products__form--input">
                    <TextField
                        required
                        multilined="true"
                        name="description"
                        variant="outlined"
                        label="Description"
                        rows="4"
                        defaultValue={this.state.price}
                        onKeyUp={this.handleChange} />
                </div>

                <BtnProducts handleClick={this.handleSubmit} text="Enviar" />
            </form>
        )
    };
}

export default AddProductsForm;
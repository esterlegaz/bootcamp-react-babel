import React from 'react';
import './AddProductsForm.scss';
import * as ProductService from './../Services/ProductsService';

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
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        return (
            <form className="products__form" onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input value={this.state.name} onChange={this.handleChange} type="text" name="name" />
                </label>
                <label>
                    Price:
                    <input value={this.state.price} onChange={this.handleChange} type="number" name="price" />
                </label>
                <label>
                    Description:
              <textarea value={this.state.description} onChange={this.handleChange} name="description"/>
                </label>
                <button type="submit">Enviar</button>
            </form>
        )
    };
}

export default AddProductsForm;
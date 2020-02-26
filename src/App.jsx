import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import Header from './Header/Header.jsx';
import Products from './Products/Products.jsx';
import ProductsCard from './ProductsCart/ProductsCart.jsx';
import AddProductsForm from './AddProductsForm/AddProductsForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGrid: false
    };
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Products handleIsGrid={() => this.setState({ isGrid: true })} handleIsNotGrid={() => this.setState({ isGrid: false })} isGrid={this.state.isGrid}/>
          </Route>
          <Route path="/cart">
            <ProductsCard handleIsGrid={() => this.setState({ isGrid: true })} handleIsNotGrid={() => this.setState({ isGrid: false })} isGrid={this.state.isGrid} />
          </Route>
          <Route path="/add">
            <AddProductsForm />
          </Route>
        </Switch>
      </Router>
    )

  }
}

export default App;
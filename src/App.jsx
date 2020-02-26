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
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { pink } from '@material-ui/core/colors';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGrid: false
    };
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: pink[700],
        },
        secondary: {
          main: '#aaa',
        },
      },
    });
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <div className="products__container">
          <Switch>
            <Route exact path="/">
              <Products handleIsGrid={() => this.setState({ isGrid: true })} handleIsNotGrid={() => this.setState({ isGrid: false })} isGrid={this.state.isGrid} />
            </Route>
            <Route path="/cart">
              <ProductsCard handleIsGrid={() => this.setState({ isGrid: true })} handleIsNotGrid={() => this.setState({ isGrid: false })} isGrid={this.state.isGrid} />
            </Route>
            <Route path="/add">
              <AddProductsForm />
            </Route>
          </Switch>
          </div>
        </ThemeProvider>
      </Router>
    )

  }
}

export default App;
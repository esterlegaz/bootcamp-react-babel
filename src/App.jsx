import React from 'react';
import './App.scss';
import Header from './Header/Header.jsx';
import Products from './Products/Products.jsx';
import ProductsService from './Services/ProductsService';

const productList = ProductsService;

function App() {
    return (
      <div className="App">
        <Header/>
        <Products productList={productList}/>
      </div>
    );
}

export default App;
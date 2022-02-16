import React, { Component } from "react";
import ProductList from "./Components/ProductList"
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Product from "./Components/Product";


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element = { <ProductList /> }/>
          <Route path="/product" element = { <Product /> }/>
        </Routes>
      </div>
    );
  }
}

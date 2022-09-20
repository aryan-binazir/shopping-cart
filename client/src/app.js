import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Product from "./components/product";

//import data from "../mockData/comments";

const App = () => {
  return (
    <div id="app">
        <Header/>
      <main>
      <div className="product-listing">
        <h2>Products</h2>
        <Product name="Amazon Kindle E-reader" price="$79.99" quantity={5}/>
        <Product name="Apple 10.5-Inch iPad Pro" price="$649.99" quantity={2}/>
        <Product name="Yamaha Portable Keyboard" price="$155.99" quantity={0}/>
      <div className="add-form">
        <p><a className="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label label="product-name">Product Name</label>
            <input type="text" id="product-name" value=""/>
          </div>

          <div className="input-group">
            <label label="product-price">Price</label>
            <input type="text" id="product-price" value=""/>
          </div>

          <div className="input-group">
            <label label="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value=""/>
          </div>

          <div className="actions form-actions">
            <a className="button">Add</a>
            <a className="button">Cancel</a>
          </div>
        </form>
      </div>
    </div>
      </main>
  </div>
  )
}

export default App;


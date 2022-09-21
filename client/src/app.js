import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";

//import data from "../mockData/comments";

const App = () => {
  const [dummyData, setDummyData] = useState([
    { name: "Amazon Kindle E-reader", price: "$79.99", quantity: 5 },
    { name: "Apple 10.5-Inch iPad Pro", price: "$649.99", quantity: 2 },
    { name: "Yamaha Portable Keyboard", price: "$155.99", quantity: 0 }
  ]);

  const handleAddProduct = (event, newProduct) => {
    // event.preventDefault();
    // setDummyData([dummyData.concat(newProduct)])
  }

  return (
    <div id="app">
        <Header/>
      <main>
      <div className="product-listing">
        <h2>Products</h2>
        <ul>
        {dummyData.map(product => 
          <li>
          <Product {...product}/>
          </li>
        )}
        </ul>
        <AddProduct onAdd={handleAddProduct}/>
      </div>
      </main>
    </div>
  )
}

export default App;


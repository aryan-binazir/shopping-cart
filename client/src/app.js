import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import axios from "axios"; 
;
//import data from "../mockData/comments";




const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('/api/products')
      .then(response => {
        if (response.body){
          console.log('promise fulfilled')
          setProducts(response.body)
          console.log("data is", response.body)
        }
      })
      console.log(products)
  }, [])


  const handleAddProduct = (newProduct) => {
    console.log(JSON.stringify(newProduct));
    axios
      .post('/api/products', newProduct)
      .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      
    // setProducts([...products, newProduct])
  }

  // router.post("/products", (req, res, next) => {
  //   const { title, price, quantity } = req.body;
  //   Product.create({ title, price, quantity })
  //     .then((product) => res.json(product))
  //     .catch((err) => next(err));
  // });

  return (
    <div id="app">
        <Header/>
      <main>
      <div className="product-listing">
        <h2>Products</h2>
        <ul>
        {products.map(product => 
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



// [
//   { title: "Amazon Kindle E-reader", price: "79.99", quantity: 5 },
//   { title: "Apple 10.5-Inch iPad Pro", price: "649.99", quantity: 2 },
//   { title: "Yamaha Portable Keyboard", price: "155.99", quantity: 0 }
// ]
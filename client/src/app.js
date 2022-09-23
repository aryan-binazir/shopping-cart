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
   
    axios
        .get('/api/products')
        .then(response => {
          if (response.data) {          
            setProducts(response.data); 
          }
        })
  }, [])

  const handleDelete = (pId) => {
    axios
      .delete(`api/products/${pId}`)
      .then(response => {
        setProducts(products.filter(product => product._id != pId));
      })
      .catch(error => {
        console.log(error);
      }); 
  }

  const handleEdit = (_id, editedProduct) => {
    console.log(_id, editedProduct);

    axios
      .put(`api/products/${_id}`, editedProduct)
      .then(response => {
        console.log("response", response);
        setProducts(getEditedList(_id, editedProduct))
      })
      .catch(error => {
        console.log(error);
      }); 
  }

  const getEditedList = (_id, editedProduct) => {
    return products.map(product => {
      if (product._id === _id) {
        return { ...product, ...editedProduct }
      } else {
        return product;
      }
    });
  }


  const handleAddProduct = (newProduct, callback) => {
    axios
      .post('/api/products', newProduct)
      .then(response => {
          console.log(response.data);
          setProducts(products.concat(response.data));
          if (callback) callback();
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
          <li key={product._id}>
          <Product {...product} 
          onDelete={handleDelete}
          onEdit={handleEdit}
          />
          </li>
        )
        }
        </ul>
        <AddProduct onAdd={handleAddProduct}/>
      </div>
      </main>
    </div>
  )
}

export default App;

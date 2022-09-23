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
          console.log("I'me here")
          if (response.data){          
            setProducts(response.data)
            
          }

        })
  }, [])

  const getProducts = () => {
    axios
    .get('/api/products')
    .then(response => {
      console.log("I'me here")
      if (response.data){          
        setProducts(response.data)
        
      }

    })
  }

  const handleDelete = (id) => {
    console.log("In delte", id)
    axios
      .delete(`api/products/${id}`)
      .then(response => {
        console.log(response);
        getProducts();
      })
      .catch(error => {
        console.log(error);
      }); 
  }

  const handleEdit = (id) => {
    // console.log("In edit", id)
    // axios
    //   .put(`api/products/${id}`)
    //   .then(response => {
    //     console.log(response);
    //     getProducts();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   }); 
  }

  const handleAddProduct = (newProduct) => {
    axios
      .post('/api/products', newProduct)
      .then(response => {
          console.log(response);
          getProducts();
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

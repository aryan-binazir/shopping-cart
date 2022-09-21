import { useState } from "react";

const AddProduct = ({ onAdd }) => {
  const [isFormShown, setIsFormShown] = useState(false)
  const handleToggle = () => {
    setIsFormShown(!isFormShown)
  }

  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  // const [quantity, setQuantity] = useState({quantity:"", price:"", title:""});

  const resetInputs = () => {
    setPrice("");
    setTitle("");
    setQuantity("");
  };
// to be continued... 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newProduct = { price, title, quantity };
  //   onSubmit(newProduct, resetInputs);
  //   onClick({ title, price, quantity })
  //   console.log('here')
  // };
  
return (
  <>
    <div className={isFormShown ? "add-form visible" : "add-form"}>
      <p><a className="button add-product-button" onClick={handleToggle}>Add A Product</a></p>
            <h3>Add Product</h3>
                 <form action="" onSubmit={handleSubmit}>
            <div className="input-group">
             <label label="product-name">Product Name</label>
              <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
           </div>
            <div className="input-group">
              <label label="product-price">Price</label>
               <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
             </div>

           <div className="input-group">
              <label label="product-quantity">Quantity</label>
              <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            </div>

           <div className="actions form-actions">
               <a className="button" type="submit">Add</a>
               <a className="button" onClick={handleToggle}>Cancel</a>
           </div>
           </form>
            
    </div>
  </>
  )
}

export default AddProduct;
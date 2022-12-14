import { useState } from "react";

const AddProduct = ({ onAdd }) => {
  const [isFormShown, setIsFormShown] = useState(false)
  const handleToggle = () => {
    setIsFormShown(!isFormShown)
  }

  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  const resetForm = () => {
    setPrice("");
    setTitle("");
    setQuantity("");
    setIsFormShown();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, price, quantity }, resetForm);
  }
  
return (
  <>
    <div className={isFormShown ? "add-form visible" : "add-form"}>
      <p><a className="button add-product-button" onClick={handleToggle}>Add A Product</a></p>
            <h3>Add Product</h3>
            <form action="" onSubmit={handleSubmit}>
            <div className="input-group">
             <label htmlFor="product-name" label="product-name">Product Name</label>
              <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="input-group">
              <label htmlFor="product-price" label="product-price">Price</label>
               <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
             </div>

           <div className="input-group">
              <label htmlFor="product-quantity" label="product-quantity">Quantity</label>
              <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            </div>

           <div className="actions form-actions">
               <a href="/#" className="button" onClick={handleSubmit}>Add</a>
               <a className="button" onClick={handleToggle}>Cancel</a>
           </div>
           </form>
            
    </div>
  </>
  )
}

export default AddProduct;
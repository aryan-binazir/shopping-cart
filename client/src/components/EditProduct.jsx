import { useState } from "react";

const EditProduct = ({ _id, price, title, quantity, showEdit, toggleVisibility, onEdit }) => {
  const [inputPrice, setInputPrice] = useState(price);
  const [inputTitle, setInputTitle] = useState(title);
  const [inputQuantity, setInputQuantity] = useState(quantity);
  
  const handleUpdateProduct = () => {
    onEdit(_id, {price: inputPrice, title: inputTitle, quantity: inputQuantity });
    toggleVisibility();
  }

  if (showEdit) {
    return (
      <div className="edit-form">
        <h3>Edit Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
          </div>
          
          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" value={inputPrice} onChange={(e) => setInputPrice(e.target.value)}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value={inputQuantity} onChange={(e) => setInputQuantity(e.target.value)}/>
          </div>
          
          <div className="actions form-actions">
            <a className="button" onClick={handleUpdateProduct}>Update</a>
            <a className="button" onClick={toggleVisibility}>Cancel</a>
          </div>
        </form>
      </div>
          
      )
    }
}

export default EditProduct;
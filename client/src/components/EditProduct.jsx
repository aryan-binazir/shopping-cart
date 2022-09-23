import { useState } from "react";

const EditProduct = (props) => {
  const [price, setPrice] = useState(props.price);
  const [title, setTitle] = useState(props.title);
  const [quantity, setQuantity] = useState(props.quantity);
  
  if (props.showEdit) {
    return (
      <div className="edit-form">
        <h3>Edit Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          
          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
          </div>

          {/* <a className="button" onClick={handleSubmit}>Add</a>
          <a className="button" onClick={handleToggle}>Cancel</a>
           */}
          
          <div className="actions form-actions">
            <a className="button">Update</a>
            <a className="button" onClick={props.toggleVisibility}>Cancel</a>
          </div>
        </form>
      </div>
          
      )
    }
}

export default EditProduct;
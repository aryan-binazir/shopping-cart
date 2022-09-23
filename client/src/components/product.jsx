import EditProduct from "./EditProduct";
import { useState } from "react";

const Product = ({ title, price, quantity, _id, onDelete, onEdit }) => {
const [showEdit, setShowEdit] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(_id);
  }

  const toggleEditVisibility = () => {
    setShowEdit(!showEdit);
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className="button add-to-cart">Add to Cart</a>
          <a className="button edit" onClick={toggleEditVisibility}>Edit</a>
          <EditProduct 
          title={title}
          quantity={quantity}
          price={price}
          showEdit={showEdit}
          toggleVisibility={toggleEditVisibility}
          onEdit={onEdit}
          _id={_id}
          />
        </div>
        <a className="delete-button" onClick={handleDelete}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
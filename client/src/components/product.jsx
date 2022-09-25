import EditProduct from "./EditProduct";
import { useState } from "react";

const Product = ({ currentProduct, title, price, quantity, _id, onDelete, onEdit, cart, setCart }) => {
const [showEdit, setShowEdit] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(_id);
  }

  const toggleEditVisibility = () => {
    setShowEdit(!showEdit);
  }

 
  
  const addToCart = () => {
    const inCart = cart.filter(product => product._id === _id);
    if (inCart.length > 0) {
      console.log();
      // cart.splice(cart.indexOf(inCart[0]))
      const indexOfItem = cart.indexOf(inCart[0])
      // let newCart = cart.slice(0, indexOfItem - 1).concat(cart.slice(indexOfItem))
      // console.log(newCart)
      let newCart = cart.slice();
      newCart.splice(cart.indexOf(inCart[0]))
      setCart([...newCart, { ...currentProduct, quantity: currentProduct.quantity += 1 }])
    } else {
      setCart([...cart, { ...currentProduct, quantity: 1 }]);
    }
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className="button add-to-cart" onClick={addToCart}>Add to Cart</a>
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
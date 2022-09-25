import EditProduct from "./EditProduct";
import { useState } from "react";

const Product = ({ currentProduct, title, price, quantity, _id, onDelete, onEdit, cart, setCart, setProducts, products }) => {
const [showEdit, setShowEdit] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(_id);
  }

  const toggleEditVisibility = () => {
    setShowEdit(!showEdit);
  }
  
  // Set products to original products except new product quantity for current product
  // Copy products list 
  // Remove current item from products list (not mutate)
  // set products list to copy list while
  // adding current item in with new quantity

  const removeOne = (indexInProducts) => {
    // console.log(products[indexInProducts]);
    console.log(indexInProducts); 
    let newProducts = products.slice(0, indexInProducts).concat(products.slice(indexInProducts+1, products.length));
    // newProducts.splice(indexInProducts);
    console.log("New products list", newProducts)
    setProducts([...newProducts, {...currentProduct, quantity: currentProduct.quantity - 1}]);
  }

  const addToCart = () => {
    const inCart = cart.filter(product => product._id === _id);
    let copyOfProduct = Object.assign({}, inCart[0]);
    const indexOfProductItem = products.indexOf(currentProduct);
    // return if quantity 0
    if (inCart.length > 0) {
      const indexOfCartItem = cart.indexOf(inCart[0]);
      let newCart = cart.slice();
      newCart.splice(indexOfCartItem);
      setCart([...newCart, { ...copyOfProduct, quantity: copyOfProduct.quantity + 1 }]);
    } else {
      setCart([...cart, { ...currentProduct, quantity: 1 }]);
    }
    removeOne(indexOfProductItem);
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
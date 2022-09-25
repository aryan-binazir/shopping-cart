import React, { useState} from "react";

const ShoppingCart = ({ products, cart, setCart }) => {
  const [total, setTotal] = useState(0);


  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {/* <p>Your cart is empty</p> */}
      {/* <p>Total: $0</p> */}
      <table className="cart-items">
      <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
      </tr>
       {cart.map(product => 
      <tr key={product._id}>
        <th>{product.title}</th>
        <th>{product.quantity}</th>
        <th>{product.price}</th>
        
      </tr>
        )}
          

           <tr>
             <td colSpan="3" className="total">Total: ${total}</td>
           </tr>
           </table>
      <a className="button checkout disabled">Checkout</a>
    </div>
  )
}

export default ShoppingCart;
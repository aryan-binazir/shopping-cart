const Product = ({ title, price, quantity, _id, onDelete }) => {

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(_id);
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className="button add-to-cart">Add to Cart</a>
          <a className="button edit">Edit</a>
        </div>
        <a className="delete-button" onClick={handleDelete}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
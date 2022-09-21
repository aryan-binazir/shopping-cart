import { useState } from "react";

const AddProduct = ({ onAdd }) => {
  const [isFormShown, setIsFormShown] = useState(false)
  const handleToggle = () => {
    setIsFormShown(!isFormShown)
  }

/* reference material */
{/* handleChange(event) {
    this.setState({value: event.target.value});
  }
         */}
           {/* <div>
      <h2>Phonebook</h2>
        <div>
          <form onSubmit={addName}>
         <input
	          value={newName} // App controls behavior of input element
	          onChange={handleNameChange}
           />
         <button type="submit">save</button>
          </form>
      <h2>Numbers</h2>
      </div> */}



return (
  <>
    <div className={isFormShown ? "add-form visible" : "add-form"}>
      <p><a className="button add-product-button" onClick={handleToggle}>Add A Product</a></p>
            <h3>Add Product</h3>
                 <form onSubmit={onAdd(event,  { name: "Amazon Kindle E-reader", price: "$79.99", quantity: 5 })}>
            <div className="input-group">
             <label label="product-name">Product Name</label>
              <input type="text" id="product-name" value=""/>
           </div>
            <div className="input-group">
              <label label="product-price">Price</label>
               <input type="text" id="product-price" value=""/>
             </div>

           <div className="input-group">
              <label label="product-quantity">Quantity</label>
              <input type="text" id="product-quantity" value=""/>
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
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
const yourCart = React.createElement("h2", null, "Your Cart");
const yourCartIsEmpty = React.createElement("p", null, "Your cart is empty");
const total = React.createElement("p", null, "Total: $0");
const buttonCheckoutDisabled = React.createElement("button", null, "Checkout");
const cart = React.createElement("div", { className: "cart" }, [yourCart, yourCartIsEmpty, total, buttonCheckoutDisabled]);
const h1 = React.createElement("h1", null, "The Shop!");
const header = React.createElement("header", null, [ h1, cart ])

const products = React.createElement("h2", null, "Products");
const product = React.createElement("div", { className: "product" }, null)
const productListing = React.createElement("div", { className: "product-listing" }, [ products, product ]);
const main = React.createElement("main", null, productListing);

const div = React.createElement("div", {id: "app" }, [ header, main ] );
const body = React.createElement("div", null, div);  
  
  return body
  
}




{/* <main>
      <div class="product-listing">
        <h2>Products</h2>
        <div class="product">
          <div class="product-details">
            <h3>Amazon Kindle E-reader</h3>
            <p class="price">$79.99</p>
            <p class="quantity">5 left in stock</p>
            <div class="actions product-actions">
              <a class="button add-to-cart">Add to Cart</a>
              <a class="button edit">Edit</a>
            </div>
            <a class="delete-button"><span>X</span></a>
          </div>
        </div>

        <div class="product">
          <div class="product-details">
            <h3>Apple 10.5-Inch iPad Pro</h3>
            <p class="price">$649.99</p>
            <p class="quantity">2 left in stock</p>
            <div class="actions product-actions">
              <a class="button add-to-cart">Add to Cart</a>
              <a class="button edit">Edit</a>
            </div>
            <a class="delete-button"><span>X</span></a>
          </div>
        </div>

        <div class="product">
          <div class="product-details">
            <h3>Yamaha Portable Keyboard</h3>
            <p class="price">$155.99</p>
            <p class="quantity">0 left in stock</p>
            <div class="actions product-actions">
              <a class="button add-to-cart disabled">Add to Cart</a>
              <a class="button edit">Edit</a>
            </div>
            <a class="delete-button"><span>X</span></a>
          </div>
        </div>
      </div>

      <div class="add-form">
        <p><a class="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form>
          <div class="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" value="">
          </div>

          <div class="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price" value="">
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value="">
          </div>

          <div class="actions form-actions">
            <a class="button">Add</a>
            <a class="button">Cancel</a>
          </div>
        </form>
      </div>
    </main> */}




const root = document.getElementById("root");
ReactDOM.createRoot(root).render(App());


// React.createElement("p", null, "Hello World!")
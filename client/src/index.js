import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.js";

// const App = () => {
// const yourCart = React.createElement("h2", null, "Your Cart");
// const yourCartIsEmpty = React.createElement("p", null, "Your cart is empty");
// const total = React.createElement("p", null, "Total: $0");
// const buttonCheckoutDisabled = React.createElement("button", null, "Checkout");
// const cart = React.createElement("div", { className: "cart" }, [yourCart, yourCartIsEmpty, total, buttonCheckoutDisabled]);
// const h1 = React.createElement("h1", null, "The Shop!");
// const header = React.createElement("header", null, [ h1, cart ])

// const products = React.createElement("h2", null, "Products");
// const product = React.createElement("div", { className: "product" }, null)
// const productListing = React.createElement("div", { className: "product-listing" }, [ products, product ]);
// const main = React.createElement("main", null, productListing);

// const div = React.createElement("div", {id: "app" }, [ header, main ] );
// const body = React.createElement("div", null, div);  
  
//   return body
  
// }

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);

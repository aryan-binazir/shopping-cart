import ShoppingCart from "./ShoppingCart";

const Header = ({ cart, setCart, products }) => {
  return (
    <header>
    <h1>The Shop!</h1>
    <ShoppingCart 
    products={products}
    cart={cart}
    setCart={setCart}
    />
    </header>
  );
}

export default Header;
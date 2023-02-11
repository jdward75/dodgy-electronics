import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import CartProvider from "./store/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Products />
      </CartProvider>
    </div>
  );
}

export default App;

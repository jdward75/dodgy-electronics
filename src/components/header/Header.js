import styles from "./Header.module.css";
import { CartContext } from "../../store/CartContext";
import { useContext, useState } from "react";
import reactDom from "react-dom";
import Login from "../UI/Login";
import Cart from "../cart/Cart";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div className={styles.header}>
      <h1>Dodgy Electronics</h1>
      <div className={styles["account"]}>
        <span>Jonathan Ward</span>
        <button>Login</button>
        <button onClick={showCartHandler}>
          Cart:{" "}
          {cartCtx.cart.total_value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </button>
      </div>
      {showLogin &&
        reactDom.createPortal(
          <Login />,
          document.getElementById("root-overlay")
        )}
      {showCart &&
        reactDom.createPortal(
          <Cart hideCart={hideCartHandler} cartCtx={cartCtx} />,
          document.getElementById("root-overlay")
        )}
    </div>
  );
};

export default Header;

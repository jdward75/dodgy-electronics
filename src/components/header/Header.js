import styles from "./Header.module.css";
import { CartContext } from "../../store/CartContext";
import { useContext, useState } from "react";
import reactDom from "react-dom";
import Cart from "../cart/Cart";

const Header = () => {
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
          Cart: {`$${cartCtx.cart.total_value}`}
        </button>
      </div>
      {showCart &&
        reactDom.createPortal(
          <Cart hideCart={hideCartHandler} />,
          document.getElementById("root-overlay")
        )}
    </div>
  );
};

export default Header;

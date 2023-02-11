import styles from "./Header.module.css";
import { CartContext } from "../../store/CartContext";
import { useContext } from "react";

const Header = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles.header}>
      <h1>Dodgy Electronics</h1>
      <div className={styles["account"]}>
        <span>Jonathan Ward</span>
        <button>Login</button>
        <button>Cart: {`$${cartCtx.cart.total_value}`}</button>
      </div>
    </div>
  );
};

export default Header;

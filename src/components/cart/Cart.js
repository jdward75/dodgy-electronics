import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <button className={styles["close-button"]} onClick={props.hideCart}>
          X
        </button>
        <h3 className={styles.header}>Shopping Cart Items</h3>
        {Object.entries(props.cartCtx.cart.items).map(([key, value]) => {
          return (
            <CartItem
              key={key}
              id={key}
              item={value}
              updateCart={props.cartCtx.updateCart}
            />
          );
        })}
        <div className={styles.footer}>
          <div className={styles["footer-header"]}>Cart total amount:</div>
          <div className={styles["footer-amount"]}>
            {props.cartCtx.cart.total_value.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

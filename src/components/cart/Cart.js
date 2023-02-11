import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <button className={styles["close-button"]} onClick={props.hideCart}>
          X
        </button>
      </div>
    </div>
  );
};

export default Cart;

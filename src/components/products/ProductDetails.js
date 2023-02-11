import styles from "./ProductDetails.module.css";
import Input from "../UI/Input";
import { CartContext } from "../../store/CartContext";
import { useContext, useRef } from "react";

const ProductDetails = (props) => {
  const cartCtx = useContext(CartContext);
  const quantityRef = useRef();

  let prevQuantity = String(cartCtx.cart.items[props.product.id]?.quantity);
  if (prevQuantity === undefined) {
    prevQuantity = "";
  }

  const updateCartHandler = () => {
    const quantiy = Number(quantityRef.current.value);
    const data = {
      id: props.product.id,
      title: props.product.title,
      brand: props.product.brand,
      quantity: quantiy,
      price: props.product.price,
    };
    cartCtx.updateCart(data);
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles.content}>
        <button
          className={styles["close-button"]}
          onClick={props.hideProductDetails}
        >
          X
        </button>
        <h2 className={styles.title}>{props.product.title}</h2>
        <img
          className={styles.image}
          src={require(`../../assets/${props.product.image}`)}
          alt={props.product.title}
        />
        <div className={styles.footer}>
          <h3>{`$${props.product.price}`}</h3>
          <div className={styles["update-cart"]}>
            <Input
              styles={{ width: "50px" }}
              type="number"
              id="qty"
              name="qty"
              label="Update Cart Qty:"
              ref={quantityRef}
              onChange={updateCartHandler}
              defaultValue={prevQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import { useRef } from "react";
import styles from "./CartItem.module.css";
import Input from "../UI/Input";

const CartItem = (props) => {
  const quantityRef = useRef();

  const updateCartHandler = () => {
    const quantity = Number(quantityRef.current.value);
    const data = {
      id: props.id,
      title: props.item.title,
      brand: props.item.brand,
      quantity: quantity,
      price: props.item.price,
    };
    console.log(props.item);
    console.log(data);
    props.updateCart(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles["description-title"]}>{props.item.title}</div>
        <div className={styles["description-id"]}>{props.item.id}</div>
      </div>
      <div className={styles.details}>
        <Input
          ref={quantityRef}
          styles={{ width: "50px" }}
          type="number"
          onChange={updateCartHandler}
          defaultValue={props.item.quantity}
        />
        <div className={styles["details-value"]}>
          {props.item.total_value.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>
    </div>
  );
};

export default CartItem;

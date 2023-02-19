import styles from "./CartItem.module.css";
import Input from "../UI/Input";

const CartItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles["description-title"]}>{props.item.title}</div>
        <div className={styles["description-id"]}>{props.item.id}</div>
      </div>
      <div className={styles.details}>
        <Input styles={{ width: "50px" }} />
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

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
        <Input />
        <div className={styles["details-value"]}>{props.item.total_value}</div>
      </div>
    </div>
  );
};

export default CartItem;

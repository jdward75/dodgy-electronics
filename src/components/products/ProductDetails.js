import styles from "./ProductDetails.module.css";
import Input from "../UI/Input";
const ProductDetails = (props) => {
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
          <Input type="number" id="qty" name="qty" label="Update cart qty:" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

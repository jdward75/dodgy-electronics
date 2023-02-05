import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  return (
    <div className={styles["product-details"]}>
      <div className={styles["product-details-content"]}>
        {props.product.id}
        <button onClick={props.hideProductDetails}>Close</button>
      </div>
    </div>
  );
};

export default ProductDetails;

import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  return (
    <div className={styles["product-details"]}>
      <div className={styles["product-details-content"]}>
        <button onClick={props.hideProductDetails}>Close</button>
        <h3>{props.product.title}</h3>
        <img
          src={require(`../../assets/${props.product.image}`)}
          alt={props.product.title}
        />
        <h3>{props.product.price}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;

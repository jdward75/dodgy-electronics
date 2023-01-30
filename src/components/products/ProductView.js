import styles from "./ProductView.module.css";

const ProductView = (props) => {
  return (
    <div className={styles["product-view"]}>
      <h3>{props.product.title}</h3>
      <img
        src={require(`../../assets/${props.product.image}`)}
        alt={props.product.title}
      />
      <h3>{props.product.price}</h3>
    </div>
  );
};

export default ProductView;

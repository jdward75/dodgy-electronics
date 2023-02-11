import styles from "./ProductView.module.css";

const ProductView = (props) => {
  const displayProductDetailsHandler = () => {
    props.displayProductDetails(props.product);
  };

  return (
    <div
      className={styles["product-view"]}
      onClick={displayProductDetailsHandler}
    >
      <h3>{props.product.title}</h3>
      <img
        src={require(`../../assets/${props.product.image}`)}
        alt={props.product.title}
      />
      <h3 className={styles.price}>{`$${props.product.price}`}</h3>
    </div>
  );
};

export default ProductView;

import styles from "./ProductView.module.css";

const ProductView = (props) => {
  return (
    <li className={styles["product-view"]}>
      <h3>{props.product.title}</h3>
      <img
        src={require(`../../assets/${props.product.image}`)}
        alt={props.product.title}
      />
      <h3>{props.product.price}</h3>
    </li>
  );
};

export default ProductView;

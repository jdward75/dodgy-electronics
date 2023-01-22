import styles from "./Products.module.css";
import ProductView from "./ProductView";

const productList = require("../../assets/productList.json");

const Products = () => {
  return (
    <ul className={styles.products}>
      {productList.map((product) => {
        return <ProductView key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default Products;

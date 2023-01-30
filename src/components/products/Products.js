import styles from "./Products.module.css";
import ProductsFilter from "./ProductsFilter";
import ProductView from "./ProductView";

const productList = require("../../assets/productList.json");

const Products = () => {
  return (
    <>
      <ProductsFilter />
      <div className={styles.products}>
        {productList.map((product) => {
          return <ProductView key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Products;

import { useState } from "react";
import styles from "./Products.module.css";
import ProductsFilter from "./ProductsFilter";
import ProductView from "./ProductView";

const productList = require("../../assets/productList.json");

const Products = () => {
  const [filteredProductList, setFilteredProductList] = useState(productList);

  const filterProductListHandler = (filters) => {
    const filteredList = productList.filter((product) => {
      let result = true;
      if (filters.category !== "All" && product.category !== filters.category) {
        result = false;
      }
      if (filters.brand !== "All" && product.brand !== filters.brand) {
        result = false;
      }
      if (filters.minPrice !== 0 && product.price < filters.minPrice) {
        result = false;
      }
      if (filters.maxPrice !== 0 && product.price > filters.maxPrice) {
        result = false;
      }
      return result;
    });
    setFilteredProductList(filteredList);
  };

  return (
    <>
      <ProductsFilter
        productList={productList}
        onFilterProductList={filterProductListHandler}
      />
      <div className={styles.products}>
        {filteredProductList.map((product) => {
          return <ProductView key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Products;

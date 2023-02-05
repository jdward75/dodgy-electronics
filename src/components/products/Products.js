import { useState } from "react";
import reactDom from "react-dom";
import ProductDetails from "./ProductDetails";
import styles from "./Products.module.css";
import ProductsFilter from "./ProductsFilter";
import ProductView from "./ProductView";

const productList = require("../../assets/productList.json");

const Products = () => {
  const [filteredProductList, setFilteredProductList] = useState(productList);
  const [displayProductDetails, setDisplayProductDetails] = useState({
    display: false,
    product: {},
  });

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

  const displayProductDetailsHandler = (product) => {
    setDisplayProductDetails({ display: true, product: product });
  };

  const hideProductDetailsHandler = () => {
    setDisplayProductDetails({ display: false, product: {} });
  };

  return (
    <>
      <ProductsFilter
        productList={productList}
        onFilterProductList={filterProductListHandler}
      />
      <div className={styles.products}>
        {filteredProductList.map((product) => {
          return (
            <ProductView
              key={product.id}
              product={product}
              displayProductDetails={displayProductDetailsHandler}
            />
          );
        })}
      </div>
      {displayProductDetails.display &&
        reactDom.createPortal(
          <ProductDetails
            product={displayProductDetails.product}
            hideProductDetails={hideProductDetailsHandler}
          />,
          document.getElementById("root-overlay")
        )}
    </>
  );
};

export default Products;

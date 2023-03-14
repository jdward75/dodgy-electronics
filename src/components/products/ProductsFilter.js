import styles from "./ProductsFilter.module.css";
import Input from "../UI/Input";
import Select from "../UI/Select";
import { useRef } from "react";

const ProductsFilter = (props) => {
  const categoryOptions = [
    {
      id: "All",
      value: "All",
      display: "All",
    },
    ...new Map(
      props.productList.map((item) => [
        item["category"],
        {
          id: item.category,
          value: item.category,
          display: item.category,
        },
      ])
    ).values(),
  ];

  const brandOptions = [
    {
      id: "All",
      value: "All",
      display: "All",
    },
    ...new Map(
      props.productList.map((item) => [
        item["brand"],
        {
          id: item.brand,
          value: item.brand,
          display: item.brand,
        },
      ])
    ).values(),
  ];

  const categoryRef = useRef();
  const brandRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const applyFilterProductList = () => {
    const filter = {
      category: categoryRef.current.value,
      brand: brandRef.current.value,
      minPrice: Number(minPriceRef.current.value),
      maxPrice: Number(maxPriceRef.current.value),
    };
    props.onFilterProductList(filter);
  };

  return (
    <div className={styles["product-filters"]}>
      <Select
        id="category"
        label="Category:"
        name="category"
        options={categoryOptions}
        ref={categoryRef}
        onChange={applyFilterProductList}
        labelStyle={{ width: "75px" }}
        inputStyle={{ width: "100px" }}
      />
      <Select
        id="brand"
        label="Brand:"
        name="brand"
        options={brandOptions}
        ref={brandRef}
        onChange={applyFilterProductList}
        labelStyle={{ width: "75px" }}
        inputStyle={{ width: "100px" }}
      />
      <Input
        id="min-price"
        label="Min Price:"
        name="min-price"
        type="number"
        ref={minPriceRef}
        onChange={applyFilterProductList}
        labelStyle={{ width: "75px" }}
        inputStyle={{ width: "100px" }}
      />
      <Input
        id="max-price"
        label="Max Price:"
        name="max-price"
        type="number"
        width="100px"
        ref={maxPriceRef}
        onChange={applyFilterProductList}
        labelStyle={{ width: "75px" }}
        inputStyle={{ width: "100px" }}
      />
    </div>
  );
};

export default ProductsFilter;

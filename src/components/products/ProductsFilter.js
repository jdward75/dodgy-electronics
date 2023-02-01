import styles from "./ProductsFilter.module.css";
import Input from "../UI/Input";
import Select from "../UI/Select";

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

  const applyFilterProductList = () => {
    const filter = {
      category: "tv",
      brand: "Samsung",
      minPrice: 0,
      maxPrice: 500,
    };
    props.onFilterProductList(filter);
  };

  return (
    <div className={styles["product-filters"]}>
      <Select
        id="category"
        label="Category"
        name="category"
        options={categoryOptions}
        onChange={applyFilterProductList}
      />
      <Select id="brand" label="Brand" name="brand" options={brandOptions} />
      <Input id="min-price" label="Min Price:" name="min-price" type="number" />
      <Input id="max-price" label="Max Price:" name="max-price" type="number" />
    </div>
  );
};

export default ProductsFilter;

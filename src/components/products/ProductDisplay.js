import styles from "./ProductDisplay.module.css";
import prodImg from "../../assets/tv_1.webp";

const ProductDisplay = (props) => {
  return (
    <div>
      <img src={prodImg} alt="tv_1" />
    </div>
  );
};

export default ProductDisplay;

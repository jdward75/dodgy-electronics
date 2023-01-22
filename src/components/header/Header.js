import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Dodgy Electronics</h1>
      <div className={styles["account"]}>
        <span>Jonathan Ward</span>
        <button>Login</button>
        <button>Cart: $0.00</button>
      </div>
    </div>
  );
};

export default Header;

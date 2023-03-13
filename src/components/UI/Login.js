import Input from "./Input";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <Input />
        <Input />
        <input type="submit" value="Login" />
      </div>
    </div>
  );
};

export default Login;

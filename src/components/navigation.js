import { Link } from "react-router-dom";
import styles from "./topHeader/styles.module.css";

function Navigation() {
  return (
    <>
      <ul className={styles.navList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;

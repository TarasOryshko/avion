import styles from "./styles.module.css";
import SearchSVG from "./Search.svg";
import BuySVG from "./Shopping--cart.svg";
import ProfileSVG from "./User--avatar.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/shoppingContext";

function TopHeader() {
  const { shopItems } = useContext(ShopContext);

  return (
    <div className={styles.main}>
      <button className={styles.btnSearch}>
        <img src={SearchSVG} alt="search" />
      </button>
      <Link className={styles.linkToHome} to="/">
        <h2>Avoin</h2>
      </Link>
      <div className={styles.flexIcon}>
        <div style={{ position: "relative", padding: 10 }}>
          <Link to="/shopping">
            <img className={styles.imgShop} src={BuySVG} alt="shop" />
          </Link>
          {shopItems.length > 0 ? (
            <div className={styles.imgShopLength}>{shopItems.length}</div>
          ) : null}
        </div>
        <img src={ProfileSVG} alt="profile" />
      </div>
    </div>
  );
}

export default TopHeader;

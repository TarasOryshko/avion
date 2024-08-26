import footerStyle from "./footer.module.css";
import styles from "../../pages/Home/styles.module.css";

import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";

function Footer() {
  return (
    <>
      <article className={footerStyle.container}>
        <section className={footerStyle.info}>
          <div className={footerStyle.footerNav}>
            <h2>Menu</h2>
            <p>New arrivals</p>
            <p>Best sellers</p>
            <p>Recently viewed</p>
            <p>Popular this week</p>
            <p>All products</p>
          </div>
          <div className={footerStyle.footerNav}>
            <h2>Categories</h2>
            <p>Crockery</p>
            <p>Furniture</p>
            <p>Homeware</p>
            <p>Plant pots</p>
            <p>Chairs</p>
            <p>Crockery</p>
          </div>
          <div className={footerStyle.footerNav}>
            <h2>Our company</h2>
            <p>About us</p>
            <p>Vacancies</p>
            <p>Contact us</p>
            <p>Privacy</p>
            <p>Returns policy</p>
          </div>
        </section>
        <section className={footerStyle.info2}>
          <h2 style={{ marginBottom: 10 }}>Join our mailing list</h2>
          <div className={footerStyle.inputDiv}>
            <input
              className={footerStyle.input}
              type="email"
              placeholder="your@email.com"
            />
            <button
              style={{ backgroundColor: "white", color: "purple" }}
              className={styles.btn1}
              type="submit"
            >
              Sing up
            </button>
          </div>
        </section>
        <section className={footerStyle.logo}>
          <h3>Copyright 2022 Avion LTD</h3>
          <div className={footerStyle.social}>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </section>
      </article>
    </>
  );
}

export default Footer;

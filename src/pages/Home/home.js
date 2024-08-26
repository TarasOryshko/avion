import styles from "./styles.module.css";
import { makeDifferentData } from "../../components/makesDifferent/makesDifferentItem";
import Chair from "../../components/headBlock/Right Image.png";
import last from "./img/last.png";
import ShopCardList from "../../components/ShopCard/ShopCardList";
import { products, products2 } from "../../components/ShopCard/products";
import MakesDifferentList from "../../components/makesDifferent/makeDifferentList";
import SwiperSlider from "./swiper";
import Search from "../Search/Search";

function Home() {
  return (
    <>
      <Search data={products} />
      <section className={`${styles.purpleBlock} ${styles.smallBox}`}>
        <div className={styles.container}>
          <div className={styles.purpleFlex1}>
            <section>
              <h2 className={styles.textBalance}>
                The furniture brand for the future, with timeless designs
              </h2>
              <button className={styles.btn1}>View Collection</button>
            </section>
            <section>
              <p>
                A new era in eco friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors and a
                beautiful way to display things digitally using modern web
                technologies.
              </p>
            </section>
          </div>
          <div>
            <img style={{ height: "100%" }} src={Chair} alt="chair"></img>
          </div>
        </div>
      </section>
      <section className={styles.smallBox}>
        <SwiperSlider data={products} />
        <MakesDifferentList differents={makeDifferentData} />
      </section>
      <section className={styles.smallBox}>
        <ShopCardList cards={products} title={"New ceramics"} />
      </section>
      <section className={styles.smallBox}>
        <ShopCardList cards={products2} title={"Our popular products"} />
      </section>
      <section
        style={{
          padding: "60px 80px",
          textAlign: "center",
          border: "40px solid #F9F9F9",
        }}
      >
        <h2 style={{ marginBottom: 20 }}>Join the club and get the benefits</h2>
        <p style={{ marginBottom: 70 }}>
          Sign up for our newsletter and receive exclusive offers on new <br />
          ranges, sales, pop up stores and more
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            style={{ fontSize: 34 }}
            type="email"
            placeholder="you email"
          />
          <button className={styles.btn1} type="submit">
            Submit
          </button>
        </div>
      </section>
      <section style={{ display: "flex" }}>
        <div
          style={{
            padding: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2 style={{ marginBottom: 20 }}>
              From a studio in London to a global brand with over 400 outlets
            </h2>
            <p style={{ marginBottom: 10 }}>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.{" "}
            </p>
            <p>
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>
          <div>
            <button className={styles.btn1}>Get in touch</button>
          </div>
        </div>
        <div>
          <img style={{ height: "100%" }} src={last} alt="last" />
        </div>
      </section>
    </>
  );
}

export default Home;

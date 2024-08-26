import ShopCardItem from "./ShopCardItem";
import { useContext, useState } from "react";
import { ShopContext } from "../context/shoppingContext";
import { products } from "./products";
import styles from "../../pages/Home/styles.module.css";

function ShopCardList(props) {
  const initialItemsToShow = 4;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const handleShowMore = () => setItemsToShow(itemsToShow + 1);

  const { shopItems, setShopItems } = useContext(ShopContext);

  const addToShop = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    if (selectedProduct) {
      const existingItem = shopItems.find((item) => item.id === productId);
      if (existingItem) {
        const updateShowItem = shopItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setShopItems(updateShowItem);
      } else {
        setShopItems([...shopItems, selectedProduct]);
      }
    }
  };

  return (
    <>
      <h2 style={{ marginBottom: 35 }}>{props.title}</h2>
      <div>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 30,
          }}
        >
          {props.cards.slice(0, itemsToShow).map((card) => (
            <li className={styles.hover} key={card.id}>
              <ShopCardItem
                src={card.src}
                alt={card.alt}
                title={card.title}
                price={card.price}
              />
              <button
                onClick={() => addToShop(card.id)}
                style={{ marginTop: 10, padding: "5px 10px" }}
              >
                Buy
              </button>
            </li>
          ))}
        </ul>
        <div>
          {itemsToShow < props.cards.length && (
            <button
              style={{
                margin: "0 auto",
                padding: "10px 20px",
                display: "block",
              }}
              onClick={handleShowMore}
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ShopCardList;

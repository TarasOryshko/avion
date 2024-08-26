import BucketItem from "./bucketItem";
import { useContext } from "react";
import { ShopContext } from "../../context/shoppingContext";

function BucketList() {
  const { shopItems, setShopItems } = useContext(ShopContext);

  function Plus(itemId) {
    const updatePlus = shopItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setShopItems(updatePlus);
  }
  function Minus(itemId) {
    const updateMinus = shopItems.map((item) => {
      if (item.id === itemId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setShopItems(updateMinus);
  }

  const deleteItem = (itemId) => {
    const updatedBuy = [...shopItems];
    updatedBuy.splice(itemId, 1);
    setShopItems(updatedBuy);
  };

  const totalOfItems = shopItems.reduce(
    (acc, num) => acc + num.price * num.quantity,
    0
  );
  return (
    <>
      <ul>
        {shopItems.map((item, index) => (
          <li style={{ display: "flex", marginBottom: 20 }} key={item.id}>
            <BucketItem
              src={item.src}
              title={item.title}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              totalQuantity={item.quantity * item.price}
              onClicked={() => deleteItem(index)}
              onPlus={() => Plus(item.id)}
              onMinus={() => Minus(item.id)}
              onRemove={() =>
                item.quantity > 1 ? Minus(item.id) : deleteItem(index)
              }
            />
          </li>
        ))}
      </ul>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 200px",
        }}
      >
        <h2>Total</h2>
        <p>{totalOfItems}</p>
      </div>
    </>
  );
}

export default BucketList;

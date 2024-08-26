import { useContext } from "react";
import BucketList from "../../components/ShopCard/BucketShop/bucketList";
import { ShopContext } from "../../components/context/shoppingContext";

function ShoppingCard() {
  const { shopItems } = useContext(ShopContext);
  return (
    <>
      <h1>Your shopping Card</h1>
      {shopItems.length > 0 ? (
        <div>
          <div className="grid" style={{ marginBottom: 20 }}>
            <h2>Products</h2>
            <h2>Quantity</h2>
            <h2>Price</h2>
          </div>
          <BucketList />
        </div>
      ) : (
        <div
          style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}
        >
          <h3>It's empty, please add some items</h3>
        </div>
      )}
    </>
  );
}
export default ShoppingCard;

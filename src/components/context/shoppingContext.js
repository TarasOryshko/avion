import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

function ShoppingContext({ children }) {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem("SAVE_SHOP_LIST");
    if (data !== null) setShopItems(JSON.parse(data));
  }, []);
  useEffect(() => {
    if (shopItems.length > 0) {
      window.localStorage.setItem("SAVE_SHOP_LIST", JSON.stringify(shopItems));
    }
  }, [shopItems]);

  return (
    <ShopContext.Provider value={{ shopItems, setShopItems }}>
      {children}
    </ShopContext.Provider>
  );
}
export default ShoppingContext;

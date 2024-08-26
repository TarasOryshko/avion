import { useState } from "react";
import Table from "./table";
import { products } from "../../components/ShopCard/products";

function Search() {
  const [query, setQuery] = useState("");

  const keys = ["title", "description"];

  const searching = (data2) => {
    return data2.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div style={{ margin: "0 auto" }}>
      <div style={{ textAlign: "center" }}>
        <input
          style={{ fontSize: 30 }}
          type="text"
          placeholder="I search ..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <hr />
      <Table data={searching(products)} />
    </div>
  );
}
export default Search;

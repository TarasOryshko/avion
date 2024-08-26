import { Routes, Route } from "react-router-dom";

import About from "./pages/about.js";
import Home from "./pages/Home/home.js";
import Wrapper from "./components/wrapper.js";
import ShoppingCard from "./pages/Shopping/shoppingCard.js";

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopping" element={<ShoppingCard />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;

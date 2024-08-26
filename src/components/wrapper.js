import Navigation from "./navigation";
import TopHeader from "./topHeader/topHeader";
import Footer from "./Footer/Footer";

function Wrapper({ children }) {
  return (
    <div>
      <TopHeader />
      <Navigation />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Wrapper;

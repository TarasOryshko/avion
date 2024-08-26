function ShopCardItem({ title, price, src, alt }) {
  return (
    <>
      <div>
        <div>
          <img
            style={{
              marginBottom: 24,
              height: "100%",
              width: "100%",
              display: "block",
            }}
            src={src}
            alt={alt}
          />
        </div>
        <h3 style={{ marginBottom: 8 }}>{title}</h3>
        <p>£ {price}</p>
      </div>
    </>
  );
}

export default ShopCardItem;

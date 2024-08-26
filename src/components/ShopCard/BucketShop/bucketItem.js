function BucketItem(props) {
  return (
    <div className="grid" style={{ width: "100%", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img width="100" height="150" src={props.src} alt={props.alt} />
        <div style={{ paddingLeft: 10 }}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p>{props.price}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={props.onRemove} style={{ padding: 10 }}>
          -
        </button>
        <div style={{ padding: "5px 10px" }}>{props.quantity}</div>
        <button onClick={props.onPlus} style={{ padding: 10 }}>
          +
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p style={{ marginBottom: 10 }}>{props.totalQuantity}</p>
        <div>
          <button onClick={props.onClicked}>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default BucketItem;

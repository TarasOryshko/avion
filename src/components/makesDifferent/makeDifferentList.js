import mainStyles from "../../index.css";
import MakesDifferentItem from "./makesDifferentItem";

function MakesDifferentList(props) {
  return (
    <>
      <h2
        className={mainStyles.smallBox}
        style={{ textAlign: "center", marginBottom: 50 }}
      >
        {props.header}
      </h2>
      <ul style={{ display: "flex", gap: 20 }}>
        {props.differents.map((item) => (
          <MakesDifferentItem
            key={item.id}
            title={item.title}
            text={item.text}
            src={item.icon}
            alt={item.title}
          />
        ))}
      </ul>
    </>
  );
}

export default MakesDifferentList;

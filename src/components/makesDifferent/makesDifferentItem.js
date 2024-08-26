import delivery from "./Delivery.svg";
import checked from "./Checkmark--outline.svg";
import purchase from "./Purchase.svg";
import sprout from "./Sprout.svg";

function MakesDifferentItem({ title, text, src, alt }) {
  return (
    <>
      <li>
        <div>
          <img style={{ marginBottom: 16 }} src={src} alt={alt} />
        </div>
        <h3 style={{ marginBottom: 8 }}>{title}</h3>
        <p>{text}</p>
      </li>
    </>
  );
}

export default MakesDifferentItem;

export const makeDifferentData = [
  {
    id: 0,
    icon: delivery,
    title: "Next day as standard",
    text: "Order before 3pm and get your order the next day as standard",
  },
  {
    id: 1,
    icon: checked,
    title: "Made by true artisans",
    text: "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    id: 2,
    icon: purchase,
    title: "Unbeatable prices",
    text: "For our materials and quality you won’t find better prices anywhere",
  },
  {
    id: 3,
    icon: sprout,
    title: "Recycled packaging",
    text: "We use 100% recycled packaging to ensure our footprint is manageable",
  },
];

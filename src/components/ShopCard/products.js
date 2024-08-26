import chair from "../../pages/Home/img/chair.png";
import vase from "../../pages/Home/img/Vase.png";
import vase2 from "../../pages/Home/img/Vase2.png";
import lamp from "../../pages/Home/img/Lamp.png";
import sofa from "../../pages/Home/img/Large.png";
import dandyChair from "../../pages/Home/img/dandyChair.png";

export const products = [
  {
    id: 0,
    title: "The Dandy chair",
    price: 250,
    src: chair,
    alt: "img1",
    quantity: 1,
    description: "test zero",
  },
  {
    id: 1,
    title: "Rustic Vase Set",
    price: 155,
    src: vase,
    alt: "img2",
    quantity: 1,
    description: "test one",
  },
  {
    id: 2,
    title: "The Silky Vase",
    price: 125,
    src: vase2,
    alt: "img3",
    quantity: 1,
    description: "test two",
  },
  {
    id: 3,
    title: "The Lucy Lamp",
    price: 399,
    src: lamp,
    alt: "img4",
    quantity: 1,
    description: "test tree",
  },
  {
    id: 4,
    title: "The Silky Vase",
    price: 125,
    src: vase2,
    alt: "img3",
    quantity: 1,
    description: "test four",
  },
  {
    id: 5,
    title: "The Lucy Lamp",
    price: 399,
    src: lamp,
    alt: "img4",
    quantity: 1,
    description: "test five",
  },
  {
    id: 6,
    title: "The Dandy chair",
    price: 250,
    src: dandyChair,
    alt: "img6",
    quantity: 1,
    description: "test six",
  },
  {
    id: 7,
    title: "The Poplar suede sofa",
    price: 980,
    src: sofa,
    alt: "img5",
    quantity: 1,
    description: "test seven",
  },
];

export const products2 = products.filter((item) => item.price >= 250);
// const sorted = products.sort((a, b) => b.price - a.price);
// console.log(sorted);

// const tree = products.map((item) => ({ ...item, count: 0 }));
// console.log(tree);

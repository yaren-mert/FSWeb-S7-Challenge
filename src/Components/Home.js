import React from "react";
import Store from "./Store";
import "./Home.css";

const fakeStores = [
  {
    image:
      "https://1.bp.blogspot.com/-jrLZJbXloCY/X9V-bNYIJ_I/AAAAAAAABAQ/PxS9PUifN9oNUBEkeLFEWKxouTCi3xDtQCLcBGAsYHQ/s16000/mcdonalds-menu-fiyat-kampanya-subeler.jpg",
    restaurant: "McDonald's",
    explanation: "$ - American - Fast Food - Burger",
    preptime: "20-30 Min",
    cost: "$5.99 Delivery Free ",
  },
  {
    image:
      "https://media.newyorker.com/photos/5ae8acb1cc919c5bfd60ce27/master/w_1600,c_limit/Marikar-Sweetgreen.jpg",
    restaurant: "Sweetgreen",
    explanation: "$ - Healthy - Salads",
    preptime: "30-45 Min",
    cost: "$3.99 Delivery Free ",
  },
  {
    image:
      "https://images.pexels.com/photos/2374794/pexels-photo-2374794.jpeg?auto=compress&cs=tinysrgb&w=600",
    restaurant: "Starbucks",
    explanation: "$ - Cafe - Coffee and Tea ",
    preptime: "10-20 Min",
    cost: "$2.99 Delivery Free ",
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="pizza">
        <img
          src="https://images.deliveryhero.io/image/fd-tr/LH/xwb1-hero.jpg?width=1200&height=300&quality=45"
          alt="pizza"
          className="pizzaImg"
        />
      </div>
      <div className="stores">
        {fakeStores.map((event) => (
          <Store fakeStores={event} />
        ))}
      </div>
    </div>
  );
}

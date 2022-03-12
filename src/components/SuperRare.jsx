import React from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";

export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Peeps Series",
      title: "Blue Peep",
      price: 4.39,
      tag: 12983,
      time: 10,
    },
    {
      image: super2,
      series: "Peeps Series",
      title: "Green Hipster",
      price: 2.79,
      tag: 12983,
      time: 8,
    },
    {
      image: super3,
      series: "Peeps Series",
      title: "Orange Geek",
      price: 1.89,
      tag: 12983,
      time: 7,
    },
    {
      image: super4,
      series: "Peeps Series",
      title: "Purple Afro",
      price: 3.19,
      tag: 12983,
      time: 4,
    },
  ];
  return (
    <div className="super-rare" id="discover">
      <div className="title-container">
        <h2 className="title">LE Super Rare Auction</h2>
        <p className="description">
          We have released four limited edition NFT's early which which can be
          bid on via <a href="https://opensea.io/">OpenSea</a>.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

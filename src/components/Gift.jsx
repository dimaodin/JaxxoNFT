import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";

export default function Gift() {
  return (
    <div className="gift" id="giveaways">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">FREE NFT DROPS JUST FOR YOU 🎁 </h2>
          <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla facilisi.
          </p>
        <button>CLAIM THE DROP 🎊</button>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Peeps Series"
            title="Blue Peep"
            price={4.39}
            tag={17590}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Peeps Series"
            title="Orange Peep"
            price={3.79}
            tag="1094"
            time={2}
          />
        </div>
      </div>
    </div>
  );
}

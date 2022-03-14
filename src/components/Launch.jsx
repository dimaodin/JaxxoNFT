import React from "react";
import { BsArrowRight } from "react-icons/bs";
import peeps1 from "../assets/release1.png";
import peeps2 from "../assets/release2.png";
import Card from "./Card";

export default function Launch() {
  return (
    <div className="releases" id="launch">
      <div className="launch orange">
        <div className="content">
          <h2 className="title">⚠️ First Launch 7/15</h2>
          <p className="description">
          We at JAXXO, released a few limited edition NFTs in early sale, which can be
          bid on via <a href="https://rarible.com/">Rarible</a>.
          </p>
          <p className="description">
            There will be only a few of those NFTs that we will craft. Make sure so that you don't miss out.
          </p>
          <p className="description">95% of the purchases will be donated to a variety of charity organizations worldwide.</p>
          <a href="https://opensea.io/" className="link">
            I want more details <BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={peeps1} alt="peeps" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="launch green">
        <div className="card-container">
          <Card
            image={peeps2}
            series="Peeps Series"
            title="Orange Peep"
            price={3.79}
            tag="20921"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">⚠️ Second Launch 8/15</h2>
          <p className="description">
          We at JAXXO, released a few limited edition NFTs in early sale, which can be
          bid on via <a href="https://rarible.com/">Rarible</a>.
          </p>
          <p className="description">
            There will be only a few of those NFTs that we will craft. Make sure so that you don't miss out.
          </p>
          <p className="description">95% of the purchases will be donated to a variety of charity organizations worldwide.</p>
          <a href="https://rarible.com/" className="link">
            I want more details <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

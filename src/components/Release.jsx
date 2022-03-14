import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases" id="launch">
      <div className="release orange">
        <div className="content">
          <h2 className="title">⚠️ First Release 7/15</h2>
          <p className="description">
          We at JAXXO, released a few limited edition NFTs in early sale, which can be
          bid on via <a href="https://rarible.com/">Rarible</a>.
          </p>
          <p className="description">
            There will be only a few of those NFTs that we will craft. Make sure so that you don't miss out.
          </p>
          <p className="description">95% of the purchases will be donated to a variety of charity organizations worldwide.</p>
          <a href="https://opensea.io/" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Peeps Series"
            title="Orange Peep"
            price={3.79}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">⚠️ Second Release 8/15</h2>
          <p className="description">
          We at JAXXO, released a few limited edition NFTs in early sale, which can be
          bid on via <a href="https://rarible.com/">Rarible</a>.
          </p>
          <p className="description">
            There will be only a few of those NFTs that we will craft. Make sure so that you don't miss out.
          </p>
          <p className="description">95% of the purchases will be donated to a variety of charity organizations worldwide.</p>
          <a href="https://rarible.com/" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

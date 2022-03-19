import React from "react";
import superEth from "../assets/supereth.png";
export default function Card({ image, series, title, price, tag, time }) {
  return (
    <div className="card">
      <div className="card-image" data-aos="fade" data-aos-offset="-200" data-aos-delay="100">
        <img src={image} alt="super1" />
      </div>
      <div className="card-content">
        <div className="card-heading" data-aos="fade" data-aos-offset="-200" data-aos-delay="200">
          <span className="card-series">{series}</span>
          <span className="card-top">Top bid</span>
        </div>
        <div className="card-details" data-aos="fade" data-aos-offset="-200" data-aos-delay="300">
          <h4 className="card-title">{title}</h4>
          <div className="card-price">
            <img src={superEth} alt="super eth" />
            <h4>{price} ETH</h4>
          </div>
        </div>
        <div className="card-sub-details" data-aos="fade" data-aos-offset="-200" data-aos-delay="400">
          <span>#{tag}</span>
          <span>{time} day/s left</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import home from "../assets/home.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title" data-aos="fade" data-aos-offset="-200">Launching in July.</p>
          <h1 className="title" data-aos="fade" data-aos-offset="-200" data-aos-delay="100">Insane NFT Art Collection 🚀</h1>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="200">
            Find the most rarest art in the NFT world, want to be a part of it? don't miss out on the release of our new NFT.
          </p>
          <button data-aos="fade" data-aos-offset="-200" data-aos-delay="300">SECURE YOUR SPOT 🔥</button>
        </div>
        <div className="image-container" data-aos="fade" data-aos-offset="-200" data-aos-delay="400">
          <div className="image">
            <LazyLoadImage
            alt="home"
            src={home}
            effect="blur"
            delayTime={300}
              />
          </div>
          <div className="ellipse-container">
            <div className="ellipse turquoise"></div>
            <div className="ellipse pink"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

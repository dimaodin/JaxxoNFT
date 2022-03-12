import React from "react";
import home from "../assets/home.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching in July 🚀</p>
          <h1 className="title">Insane NFT Art Collection</h1>
          <p className="description">
            Find the most rarest art in the NFT world, want to be a part of it? don't miss out on the release of our new NFT.
          </p>
          <button>SECURE YOUR SPOT 🔥</button>
        </div>
        <div className="image-container">
          <div className="image">
              <img src={home} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import signup from "../assets/signup.png";
export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">💯 Be the first to Purchase</h1>
          <p className="description">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>SECURE YOUR SPOT🔥</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home" />
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

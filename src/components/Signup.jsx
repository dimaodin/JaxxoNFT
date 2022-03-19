import React from "react";
import signup from "../assets/signup.png";
export default function Signup() {
  return (
    <div className="signup" id="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title" data-aos="fade" data-aos-offset="-200">Launching in July.</p>
          <h1 className="title" data-aos="fade" data-aos-offset="-200" data-aos-delay="100">Be the first to Purchase 💯</h1>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button data-aos="fade" data-aos-offset="-200" data-aos-delay="300">SECURE YOUR SPOT 🔥</button>
        </div>
        <div className="image-container">
          <div className="image" data-aos="fade" data-aos-offset="-200" data-aos-delay="400">
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

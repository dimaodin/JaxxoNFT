import React from "react";
import crown from "../assets/crown.webp";
import medal from "../assets/medal.webp";

export default function Activity() {
  return (
    <div className="activity" id="activity">
      <div className="container">
        <div className="content">
          <div className="image" data-aos="fade" data-aos-offset="-200">
            <img src={crown} alt="crown" />
          </div>
          <h2 className="title" data-aos="fade" data-aos-offset="-200" data-aos-delay="100">The best at our field.</h2>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="200"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim.
          </p>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim.
          </p>
        </div>
        <div className="content">
          <div className="image"  data-aos="fade" data-aos-offset="-200">
            <img src={medal} alt="medal" />
          </div>
          <h2 className="title" data-aos="fade" data-aos-offset="-200" data-aos-delay="100">Not a usual NFT.</h2>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim.
          </p>
          <p className="description" data-aos="fade" data-aos-offset="-200" data-aos-delay="300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim.
          </p>
        </div>
      </div>
    </div>
  );
}

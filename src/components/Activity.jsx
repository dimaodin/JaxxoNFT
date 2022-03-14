import React from "react";
import crown from "../assets/crown.png";
import medal from "../assets/medal.png";

export default function Activity() {
  return (
    <div className="activity" id="activity">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={crown} alt="crown" />
          </div>
          <h2 className="title">The best at our field.</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={medal} alt="medal" />
          </div>
          <h2 className="title">Not a usual NFT.</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim.
          </p>
        </div>
      </div>
    </div>
  );
}

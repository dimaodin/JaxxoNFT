import React from "react";
import clients1 from "../assets/clients1.svg";
import clients2 from "../assets/clients2.svg";
import clients3 from "../assets/clients3.svg";
import clients4 from "../assets/clients4.svg";
import clients5 from "../assets/clients5.svg";

export default function Clients() {
  const data = [clients1, clients2, clients3, clients4, clients5];
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok, FaDiscord } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["About Us", "Terms and Conditions", "Privacy Policy"],
    },
    {
      title: "NFT",
      data: ["OpenSea", "Rarible", "Foundation", "SuperRare"],
    },
    {
      title: "Contact",
      data: ["Help","Press", "Support", "Careers"],
    },
    {
      title: "Social",
      data: [ "Facebook", "Twitter", "Instagram", "TikTok", "Discord"],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
    <FaDiscord />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 Jaxxo.</span>
        <span>Made by <a href="https://dimaodin.com">Dima Odintsov.</a></span>
        <span className="launch">· Launching July 2022 🎉</span>
      </div>
    </footer>
  );
}

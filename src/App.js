import React, { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gift from "./components/Gift";
import Activity from "./components/Activity";
import Clients from "./components/Clients";
import Discover from "./components/Discover";
import Launch from "./components/Launch";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import scrollreveal from "scrollreveal";
import "./sass/index.scss";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "135px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .gift,
        .clients,
        .discover,
        .launch,
        .activity,
        .signup,
        footer
    `,
        {
          interval: 500,
          delay: 100,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Gift />
      <Activity />
      <Clients />
      <Discover />
      <Launch />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;

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
import "./sass/index.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

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

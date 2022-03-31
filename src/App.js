import React, { useEffect } from "react";
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
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
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

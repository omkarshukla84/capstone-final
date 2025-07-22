import React, { useState, useEffect } from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Loader from "../Loader";

function Home() {
  // for loader to open or close
  const [open, setOpen] = useState(true);

  // following useState is for loader
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.readyState === "complete") {
        setOpen(false);
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {open === true ? <Loader open /> : <Loader />}
      <HeroSection />
      <Cards />
    </div>
  );
}

export default Home;

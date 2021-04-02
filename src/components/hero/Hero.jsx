import React from "react";
import "./Hero.css";

import Moon from "../../assets/img/moon.png";
import AOS from "aos";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);

  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-left" style={{ width: "400px" }}>
          <h1 style={{ marginBottom: "40px" }}>
            We connect blocks and people to form chains
          </h1>
          <p
            style={{
              marginBottom: "40px",
              fontSize: "18px",
              wordSpacing: "4px",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            maiores provident labore libero. Odio soluta sint quidem dolor
            natus! Dolor cum eveniet incidunt ab deserunt laboriosam, quisquam
            voluptas quia quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            maiores provident labore libero. Odio soluta sint quidem dolor
            natus! Dolor cum eveniet incidunt ab deserunt laboriosam, quisquam
            voluptas quia quas?
          </p>
        </div>
        <div className="hero-right">
          <img
            src={Moon}
            style={{ width: "900px", height: "900px", marginLeft: "100px" }}
            alt="no img"
            className="moon"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

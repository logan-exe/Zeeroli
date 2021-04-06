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
            We know the rules, we break one, we create one. We will find the
            problem and we will create a solution. We Techno Blocks work on
            projects that gets marked on the community.
          </p>
          <p
            style={{
              marginBottom: "40px",
              fontSize: "18px",
              wordSpacing: "4px",
            }}
          >
            Our Enterprise in Blockchain Development drives us to create custom
            blockchain-based solutions to create applications in various
            industries. We are in the process of evolving continuously into
            becoming a force to reckon.
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
      <div className="hero-mobile" style={{ marginTop: "150px" }}>
        <div className="hero-mobile-content">
          <h1 style={{ marginBottom: "40px" }}>
            We connect blocks and people to form chain
          </h1>
          <p
            style={{
              marginBottom: "40px",
              fontSize: "18px",
              wordSpacing: "4px",
            }}
          >
            We know the rules, we break one,we create one. We will find the
            problem and we will create a solution. We Techno Blocks work on
            projects that gets marked on the community.
          </p>
          <p
            style={{
              // marginBottom: "40px",
              fontSize: "18px",
              wordSpacing: "4px",
            }}
          >
            Our Enterprise in Blockchain Development drives us to create custom
            blockchain-based solutions to create applications in various
            industries. We are in the process of evolving continuously into
            becoming a force to reckon.
          </p>
        </div>
        <div className="mobile-cube">
          <img src={Moon} className="my-moon" alt="no img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

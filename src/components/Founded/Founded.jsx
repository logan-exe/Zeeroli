import React from "react";
import "./Founded.css";
import FoundedImage from "../../assets/img/founded.png";
import Cylinder from "../../assets/img/cylinder.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Founded() {
  useEffect(() => {
    // console.log("hello world");
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <div
      className="founded-wrapper"
      style={{ background: "black", marginTop: "100px" }}
    >
      <div className="founded">
        <div className="founded-image" data-aos="fade-left">
          <img src={Cylinder} alt="no img" />
        </div>
        <div className="founded-content" data-aos="fade-up">
          <img
            data-aos="fade-up"
            src={FoundedImage}
            alt="no img"
            style={{ width: "100px", height: "160px", marginBottom: "20px" }}
          />
          <h1 data-aos="fade-up">Founded For</h1>
          <p data-aos="fade-up">
            “We Believe more Local is more global”. We want to create a Start-Up
            that people and industries can trust working with. We are a team of
            young and vibrant blockchain enthusiats, we have a common goal, we
            need to pass the ball to score the goal. As We state, we have the
            team to pass the ball.
          </p>
          <p data-aos="fade-up">
            The process goes hand in hand, while one works and the other
            respects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Founded;

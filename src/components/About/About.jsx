import React from "react";
import "./About.css";
import AboutImage from "../../assets/img/about.png";
import Aboutus from "../../assets/img/aboutus.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    // console.log("hello world");
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <div className="about-wrapper" style={{ background: "black" }}>
      <div className="about">
        <div className="about-content" data-aos="fade-up">
          <img
            data-aos="fade-up"
            src={AboutImage}
            alt="no img"
            style={{ width: "100px", height: "160px", marginBottom: "20px" }}
          />
          <h1 data-aos="fade-up">About Us</h1>
          <p data-aos="fade-up">
            We create the world of Blockchains. We bring your ideas to life, by
            creating the platforms you desire, from mobile app to desktop
            applications, from services to solutions. We value your time, while
            you value our work.
          </p>
          <p data-aos="fade-up">
            {
              "We provide cutting edge solutions using our in-depth knowledge and rock-solid experience to help our clients to launch theirblockchain-based business successfully."
            }
          </p>
        </div>
        <div className="about-image" data-aos="fade-left">
          <img
            src={Aboutus}
            alt="no img"
            // style={{ width: "500px", height: "500px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

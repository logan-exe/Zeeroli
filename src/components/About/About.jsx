import React from "react";
import "./About.css";
import AboutImage from "../../assets/img/about.png";
import Aboutus from "../../assets/img/aboutus.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    console.log("hello world");
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <div
      className="about-wrapper"
      style={{ background: "black", marginTop: "100px" }}
    >
      <div className="about">
        <div className="about-content" data-aos="fade-up">
          <img
            data-aos="fade-up"
            src={AboutImage}
            alt="no img"
            style={{ width: "100px", height: "160px", marginBottom: "20px" }}
          />
          <h1 data-aos="fade-up">about For</h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
            eum, ab voluptatibus, repellat soluta facere hic earum vel dolores
            delectus tenetur nisi excepturi at? Ipsa, tempora! Quod provident
            similique enim.
          </p>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
            eum, ab voluptatibus, repellat soluta facere hic earum vel dolores
            delectus tenetur nisi excepturi at? Ipsa, tempora! Quod provident
            similique enim.
          </p>
        </div>
        <div className="about-image" data-aos="fade-left">
          <img
            src={Aboutus}
            alt="no img"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;

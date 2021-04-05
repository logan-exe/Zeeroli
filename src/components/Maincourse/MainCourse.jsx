import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";

import Check from "../../assets/img/check.png";
import Check1 from "../../assets/img/check1.png";
import Check2 from "../../assets/img/check2.png";
import "./MainCourse.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MainCourse() {
  const [ind, setind] = useState(0);

  useEffect(() => {
    // console.log("hello world");
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);

  const handleSelect = (selectedind, e) => {
    setind(selectedind);
  };
  return (
    <div
      // style={{ height: "100vh", marginTop: "-100px" }}
      className="maincourse"
    >
      <center className="maincourse-header">
        {" "}
        <h1 style={{ paddingTop: "100px" }} data-aos="fade-up">
          We Serve
        </h1>
        <h1
          style={{ paddingBottom: "100px" }}
          className="new-head"
          data-aos="fade-up"
        >
          {" "}
          our Main Course
        </h1>
      </center>
      <center className="temproary" data-aos="fade-up">
        <h1>MainCourse is under construction for mobile/tablet view</h1>
        <p data-aos="fade-up">
          Kindly use desktop view to explore this section (this is temproary
          maintanence)
        </p>
      </center>
      <div className="maincourse-wrapper">
        <Carousel activeind={ind} onSelect={handleSelect} data-aos="fade-up">
          <Carousel.Item>
            <img
              className="d-block w-70"
              src={Check}
              alt="First slide"
              style={{ height: "700px", margin: "auto", paddingBottom: "60px" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-70"
              src={Check1}
              alt="First slide"
              style={{ height: "700px", margin: "auto", paddingBottom: "60px" }}
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-70"
              src={Check2}
              alt="First slide"
              style={{ height: "700px", margin: "auto", paddingBottom: "60px" }}
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default MainCourse;

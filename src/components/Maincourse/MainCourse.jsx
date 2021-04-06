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
import main1 from "../../assets/img/main1.png";
import main2 from "../../assets/img/main2.png";
import main3 from "../../assets/img/main3.png";
import main4 from "../../assets/img/main4.png";
import main5 from "../../assets/img/main5.png";
import main6 from "../../assets/img/main6.png";

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
        <h1 style={{ marginTop: "300px" }} data-aos="fade-up">
          We Serve
        </h1>
        <h1
          style={{ paddingBottom: "100px" }}
          className="new-head"
          data-aos="fade-up"
        >
          {" "}
          Our Main Course
        </h1>
      </center>
      <center className="temproary" data-aos="fade-up">
        {" "}
        <h1 style={{ marginTop: "100px" }} data-aos="fade-up">
          We Serve
        </h1>
        <h1
          style={{ paddingBottom: "100px" }}
          className="new-head"
          data-aos="fade-up"
        >
          {" "}
          Our Main Course
        </h1>
        <img
          data-aos="fade-up"
          src={main1}
          alt="no"
          style={{ width: "80vw", height: "70vh" }}
        ></img>
        <img
          data-aos="fade-up"
          src={main2}
          alt="no"
          style={{ width: "80vw", height: "70vh", marginTop: "100px" }}
        />
        <img
          data-aos="fade-up"
          src={main3}
          alt="no"
          style={{ width: "80vw", height: "70vh", marginTop: "100px" }}
        />
        <img
          data-aos="fade-up"
          src={main4}
          alt="no"
          style={{ width: "80vw", height: "70vh", marginTop: "100px" }}
        />
        <img
          data-aos="fade-up"
          src={main5}
          alt="no"
          style={{ width: "80vw", height: "70vh", marginTop: "100px" }}
        />
        <img
          data-aos="fade-up"
          src={main6}
          alt="no"
          style={{ width: "80vw", height: "70vh", marginTop: "100px" }}
        />
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

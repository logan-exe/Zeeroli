import React from "react";
import "./Founded.css";
import FoundedImage from "../../assets/img/founded.png";
import Cylinder from "../../assets/img/cylinder.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Founded() {
  useEffect(() => {
    console.log("hello world");
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
          <img
            src={Cylinder}
            alt="no img"
            style={{ width: "400px", height: "500px" }}
          />
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
      </div>
    </div>
  );
}

export default Founded;

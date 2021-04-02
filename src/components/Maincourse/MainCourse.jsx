import React from "react";
import "./MainCourse.css";

function MainCourse() {
  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <div className="slide one" id="home">
          <div className="work_content" style={{ marginLeft: "300px" }}>
            <h1 className="text-light">Welcome</h1>
            {/* <audio id="my_audio">
              <source src="./scam1992.mp3" type="audio/mp3" />
            </audio> */}
            {/* <embed
              src="scam1992.mp3"
              type="audio/midi"
              autostart="true"
              loop="true"
            /> */}
          </div>
        </div>
        <div className="slide two" id="Work">
          <div className="work_content">
            <h1>Service 1</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              culpa inventore, debitis reprehenderit odio eum error sapiente
              iusto consequuntur nemo aut esse nam ipsum. Mollitia sed enim
              tempore ad soluta?
            </p>
          </div>
        </div>
        <div className="slide three" id="About">
          <div className="work_content">
            <h1>Service 2</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              culpa inventore, debitis reprehenderit odio eum error sapiente
              iusto consequuntur nemo aut esse nam ipsum. Mollitia sed enim
              tempore ad soluta?
            </p>
          </div>
        </div>
        <div className="slide four" id="Contact">
          <h1 className="text-light">Service 3</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugit culpa inventore, debitis reprehenderit odio eum error
                  sapiente iusto consequuntur nemo aut esse nam ipsum. Mollitia
                  sed enim tempore ad soluta?
                </p>
              </div>
              <div className="work_content">
                {/* <img src="./ethereum.svg" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCourse;

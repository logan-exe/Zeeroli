import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

import Founded from "./components/Founded/Founded";
import About from "./components/About/About";
import MainCourse from "./components/Maincourse/MainCourse";

import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer/Footer";

import Reactimg from "./assets/img/react.png";

import NodeImg from "./assets/img/node.png";
import Ether from "./assets/img/ether.png";
import Flutter from "./assets/img/flutter.png";
import Python from "./assets/img/python.png";
import Btc from "./assets/img/btc.png";
import { Element } from "react-scroll";
import SecretSauce from "./components/SecretSauce/SecretSauce";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // console.log("hello world");
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>

      <Hero></Hero>
      <Element name="aboutus">
        <About></About>
        <Founded></Founded>
      </Element>
      <Element name="maincourse">
        <MainCourse></MainCourse>
      </Element>

      <Element name="ingredients">
        <center
          className="ingredients-wrapper"
          // style={{ marginTop: "150px", marginBottom: "100px" }}
        >
          <h1 data-aos="fade-up">We Use</h1>
          <h1 className="new-head" data-aos="fade-up">
            {" "}
            Our Ingredients
          </h1>
        </center>
        <div className="cube-wrapper" data-aos="fade-right">
          <div className="cube">
            <div className="box box1">
              <img className="cbimg" src={Reactimg} alt="img 1" />
            </div>
            <div className="box box2">
              <img className="cbimg" src={NodeImg} alt="img 2" />
            </div>
            <div className="box box3">
              <img className="cbimg" src={Ether} alt="img 3" />
            </div>
            <div className="box box4">
              <img className="cbimg" src={Flutter} alt="img 4" />
            </div>
            <div className="box box5">
              <img className="cbimg" src={Btc} alt="img5" />
            </div>
            <div className="box box6">
              <img className="cbimg" src={Python} alt="img 6" />
            </div>
          </div>
          <div className="accord">
            <div className="row">
              <div className="col">
                <div className="tabs">
                  <div className="tab">
                    <input type="checkbox" id="chck1" />
                    <label className="tab-label" htmlFor="chck1">
                      BlockChain
                    </label>
                    <div className="tab-content">
                      Ethereum <br></br>Binance Chain<br></br> Tezos<br></br>{" "}
                      Tron <br></br>EOS Dash / PIVX
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck2" />
                    <label className="tab-label" htmlFor="chck2">
                      Tech stack
                    </label>
                    <div className="tab-content">
                      Languages - JavaScript/Typescript, Python<br></br>
                      Mobile- Flutter,React Native<br></br>
                      Database- Mysql, Mongodb <br></br> Solidity <br></br>
                      Frameworks - ReactJs, Angular, VueJs
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck3" />
                    <label className="tab-label" htmlFor="chck3">
                      Security/ Testing
                    </label>
                    <div className="tab-content">
                      Selenium/ Soap Ui<br></br>
                      JMeter<br></br>
                      Penetration attack protections<br></br>
                      Csrf attack protections<br></br>
                      Vulnerablitiy Audits<br></br>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck4" />
                    <label className="tab-label" htmlFor="chck4">
                      Devops
                    </label>
                    <div className="tab-content">
                      CI/CD<br></br>
                      Github/GitLab<br></br>
                      Docker, Jenkins, Kubernetes <br></br>AWS and GCP (Full
                      support)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name="secretsauce">
        <SecretSauce></SecretSauce>
      </Element>

      <Footer></Footer>
    </div>
  );
}

export default App;

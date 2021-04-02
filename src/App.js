import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Moon from "./assets/img/moon.png";
import Founded from "./components/Founded/Founded";
import About from "./components/About/About";
import MainCourse from "./components/Maincourse/MainCourse";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>

      <Founded></Founded>
      {/* <MainCourse></MainCourse> */}
      {/* <div
        style={{
          marginTop: "1000px",
          position: "absolute",
          width: "100vw",
          height: "100vh",
          background: "green",
        }}
      ></div> */}
    </div>
  );
}

export default App;

import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Banner from "./components/Banner/Banner";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <Navbar />
      <Banner />
      <div style={{ padding: "400px 0" }}>home</div>
    </div>
  );
}

export default App;

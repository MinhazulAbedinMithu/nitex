import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";
import NumberStatsSection from "./components/NumberStatsSection/NumberStatsSection";
import Newsletter from "./components/Newsletter/Newsletter";
import FeaturedMenu from "./components/FeaturedMenu/FeaturedMenu";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <Navbar />
      <Banner />
      <FeaturedMenu />
      <NumberStatsSection />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

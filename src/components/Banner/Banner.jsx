import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowForward } from "react-icons/md";

import "./style.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import imgSlider1 from "../../images/banner-design.jpg";
import imgSlider2 from "../../images/banner-sustainable.jpg";
import imgSlider3 from "../../images/banner-speed.jpg";
import imgSlider4 from "../../images/banner-minumum.jpg";

const sliderData = [
  {
    bgImage: imgSlider1,
    tag: "Design",
    title: "Transforming fashion through innovation",
    description:
      "With our innovative and out-of-the-world designs, we stay on top of the current trend and produce designs that are well forecasted. Our designs are sustainable and have a positive impact on the environment.",
    detailsLink: "",
  },

  {
    bgImage: imgSlider2,
    tag: "Sustainability",
    title: "Offering planet friendly solutions",
    description:
      "We produce sustainable clothing for brands, keeping every procedure from designs to manufacturing, completely organic. Sustainability is a huge part of fashion and it is capable of making a positive impact in this industry.",
    detailsLink: "",
  },
  {
    bgImage: imgSlider3,
    tag: "Speed",
    title: "Delivering elevated designs fast",
    description:
      "From design to manufacturing, our processes are swift and efficient. With the help of our in-house design teams, we transform our ideas into reality within days. Efficiency is what makes us stand out.",
    detailsLink: "",
  },
  {
    bgImage: imgSlider4,
    tag: "No Minimums",
    title: "Producing what you need",
    description:
      "We are ready with our forces to meet your requirements, so don’t worry if the amount of your order is too low. We are here to help you start off and grow down the road.",
    detailsLink: "",
  },
  {
    bgImage: imgSlider1,
    tag: "Finance",
    title: "Offering flexible credit system",
    description:
      "We offer an open credit system with a limit of up to 60 days that allows you to place your orders now and make the payment later, at your own convenience.",
    detailsLink: "",
  },
];
const Banner = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="banner-slider "
      >
        {sliderData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="slider-full"
            style={{
              width: "1440px",
              height: "560px",
              flexShrink: "0",
              background: `url(${item.bgImage}) 100% 100% no-repeat`,
              backgroundSize: "cover",
            }}
          >
            <div className="slider-overlay">
              <div className="slider-content container">
                <span className="tag">
                  {index + 1}. {item.tag}
                </span>
                <h4 className="title">{item.title}</h4>
                <p className="description">{item.description}</p>
                <a href={item.detailsLink} className="details-link">
                  <span>Countinue Reading</span>
                  <MdArrowForward />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

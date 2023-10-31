import React from "react";
import "./style.scss";
import imgProcess1 from "../../images/process-1.webp";
import imgProcess2 from "../../images/process-2.webp";
import imgProcess3 from "../../images/process-3.webp";
import imgProcess4 from "../../images/process-4.webp";
import imgProcess5 from "../../images/process-5.webp";

const stepsData = [
  {
    title: "Cotton Stripper",
    img: imgProcess1,
  },
  {
    title: "Carding Cotton Fibre",
    img: imgProcess2,
  },
  {
    title: "Spinning Cotton Fibre",
    img: imgProcess3,
  },
  {
    title: "Weaving Cotton Cloth",
    img: imgProcess4,
  },
  {
    title: "Knitted Cotton Fabric",
    img: imgProcess5,
  },
];

const Sustainable = () => {
  return (
    <div className="sus-full">
      <div className="container">
        <div className="steps-section">
          {stepsData.map((item, index) => (
            <div
              className="step"
              data-aos="fade-up"
              key={index}
              style={{
                top:
                  index === 0
                    ? "-12%"
                    : index === 1
                    ? "18%"
                    : index === 2
                    ? "72%"
                    : index === 3
                    ? "69%"
                    : "17%",
                left:
                  index === 0
                    ? "35%"
                    : index === 1
                    ? "86%"
                    : index === 2
                    ? "65%"
                    : index === 3
                    ? "-5%"
                    : "-15%",
              }}
            >
              <img src={item.img} alt={item.title} className="step-icon" />
              <h3>
                {index + 1}. {item.title}
              </h3>
            </div>
          ))}
          <h2>Spread love, Not pollution</h2>
          <p>
            With Nitex, you get ethical and sustainable clothes made with love
            for your brand.
          </p>
        </div>
        <div className="phone">
          <h2>Spread love, Not pollution</h2>
          <p>
            With Nitex, you get ethical and sustainable clothes made with love
            for your brand.
          </p>
          <div className="steps-section-phone">
            {stepsData.map((item, index) => (
              <div className="st" data-aos="fade-up" key={index}>
                <img src={item.img} alt={item.title} className="step-icon" />
                <h3>
                  {index + 1}. {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainable;

import React from "react";
import "./style.scss";
const FeaturedItem = ({ info }) => {
  const { discound, title, btnInfo, img, bgImg } = info;
  return (
    <div
      // className={`bg-gradient-to-b from-['${bgImg}'] to-white w-full`}
      style={{
        background: `linear-gradient(
            to bottom,
            ${bgImg}25 0%,
            ${bgImg}25 60%,
            white 40%,
            white 100%
          )`,
        width: "100%",
        boxShadow:
          "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
      }}
    >
      <div className="leading-[1.2]">
        <div className="top">
          <span className="z-20">UPTO {discound}% OFF + Cashback</span>
          <div
            className="top-polygon "
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          ></div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          fontWeight: "bolder",
          aspectRatio: "360/195",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            paddingLeft: "9%",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <h4 className="title">{title}</h4>

          <a
            href={btnInfo.link}
            style={{
              color: "white",
              width: "max-content",
              padding: "4% 15%",
              fontSize: "11px",
              borderRadius: "4px",
              backgroundColor: bgImg,
            }}
          >
            {btnInfo.text}
          </a>
        </div>
        <div style={{ textAlign: "end" }}>
          <img src={img} alt={title} height="80" width="80" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;

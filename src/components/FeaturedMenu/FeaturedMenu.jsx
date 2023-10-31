import React from "react";
import imgUpload from "../../images/upload.png";
import imgRegister from "../../images/Registration.png";
import imgCto from "../../images/cto.webp";
import imgdress from "../../images/dress.png";
import FeaturedItem from "./FeaturedItem";
import "./style.scss";

const menuItems = [
  {
    id: 1,
    title: "Upload Demo",
    img: imgUpload,
    discound: "10",
    btnInfo: { text: "Click here", link: "" },
    bgImg: "#245195",
  },
  {
    id: 2,
    title: "Register the Industry",
    img: imgRegister,
    discound: "14",
    btnInfo: { text: "Register", link: "" },
    bgImg: "#F6A719",
  },
  {
    id: 3,
    title: "Call to Order",
    img: imgCto,
    discound: "10",
    btnInfo: { text: "Call Us", link: "" },
    bgImg: "#3CB897",
    callOrder: "09061009922",
  },
  {
    id: 4,
    title: "Featured Products",
    img: imgdress,
    discound: "60",
    btnInfo: { text: "Click here", link: "" },
    bgImg: "#C38406",
  },
];

const FeaturedMenu = () => {
  return (
    <div className="container">
      <div className="featured-full">
        {menuItems.map((item) => (
          <FeaturedItem info={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMenu;

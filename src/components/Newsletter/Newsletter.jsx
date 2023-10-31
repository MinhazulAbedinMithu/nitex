import React from "react";
import "./style.scss";

const Newsletter = () => {
  return (
    <div className="news-full">
      <div className=" news-wrap">
        <h4 className="heading">Subscribe For Update</h4>
        <div className="content">
          <input
            type="email"
            placeholder="Enter your email address"
            className="input"
          />
          <button className="button">Subscribe</button>
        </div>
        <div className="text-[16px]">
          <input type="checkbox" />{" "}
          <span>
            I agree that my submitted data is being collected and stored.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

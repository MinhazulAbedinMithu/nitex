import React from "react";
import CountUp from "react-countup";
import "./style.scss";

const NumberStatsSection = () => {
  return (
    <div className="number-stats-section">
      <div className="container number-stats-row">
        <div className="number-stat">
          <div className="description">
            <div className="number">
              <CountUp end={10} />M
            </div>{" "}
            Units per month
          </div>
          <h4>Production capacity</h4>
        </div>
        <div className="number-stat">
          <div className="description">
            <div className="number">
              <CountUp end={400} />
            </div>{" "}
            Lines
          </div>
          <h4>Production lines</h4>
        </div>
        <div className="number-stat">
          <div className="description">
            <div className="number">
              <CountUp end={4} />X
            </div>{" "}
            faster
          </div>
          <h4>Production lead time</h4>
        </div>
        <div className="number-stat">
          <div className="description">
            <div className="number">
              <CountUp end={60} />
            </div>{" "}
            Days Est.
          </div>
          <h4>Open credit payments</h4>
        </div>
      </div>
    </div>
  );
};

export default NumberStatsSection;

import React from "react";

const CountCard = ({ number, label, showBorder }) => {
  return (
    <div className={`vv-count-card text-center ${showBorder ? "vv-count-border" : ""}`}>
      <h3 className="vv-count-number mb-1">{number}</h3>
      <p className="vv-count-label mb-0">{label}</p>
    </div>
  );
};

export default CountCard;
import React from "react";

const WorkCard = ({ image, title }) => {
  return (
    <div className="vv-work-card h-100 ">
      <div className="vv-work-card-img-wrap">
        <img src={image} alt={title} className="img-fluid vv-work-card-img" />
      </div>

      <div className="vv-work-card-body">
        <h3 className="vv-work-card-title">{title}</h3>
      </div>
    </div>
  );
};

export default WorkCard;
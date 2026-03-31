import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="vv-service-card h-100 mx-4 mx-md-0">
      <div className="vv-service-card-img-wrap">
        <img src={image} alt={title} className="img-fluid vv-service-card-img" />
      </div>

      <div className="vv-service-card-body">
        <h3 className="vv-service-card-title">{title}</h3>
        <p className="vv-service-card-text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
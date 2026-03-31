import React from "react";

const TrustCard = ({ icon, title }) => {
  return (
    <div className="vv-trust-card text-center h-100">
      <div className="vv-trust-card-inner d-flex flex-column justify-content-between h-100">
        <div className="vv-trust-icon-wrap d-flex align-items-center justify-content-center">
          <img src={icon} alt={title} className="img-fluid vv-trust-icon" />
        </div>

        <div className="vv-trust-card-footer d-flex align-items-center justify-content-center">
          <h3 className="mb-0">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TrustCard;
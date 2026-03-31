import React from "react";

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="vv-team-card">
      <div className="vv-team-card-img-wrap">
        <img src={image} alt={name} className="vv-team-card-img img-fluid" />
      </div>

      <div className="vv-team-card-content">
        <h4 className="vv-team-card-name">{name}</h4>
        <p className="vv-team-card-role mb-0">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
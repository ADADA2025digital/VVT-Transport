import React from "react";

const OfferCard = ({ image, title, description, price, duration, features }) => {
  return (
    <div className="vv-offer-card ">
      <div className="vv-offer-image-wrap">
        <img src={image} alt={title} className="vv-offer-image img-fluid" />

        <div className="vv-offer-badge">
          <span >{title}</span>
        </div>
      </div>

      <div className="vv-offer-content">
        <p className="vv-offer-description">{description}</p>

        <div className="vv-offer-price-wrap">
          <h4 className="vv-offer-price mb-0">{price}</h4>
          <span className="vv-offer-duration">+ {duration}</span>
        </div>

        <ul className="vv-offer-feature-list list-unstyled mb-0">
          {features.map((feature, index) => (
            <li key={index} className="vv-offer-feature-item">
              <span className="vv-offer-feature-icon">◉</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="vv-offer-btn-wrap">
          <button type="button" className="vv-offer-btn">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
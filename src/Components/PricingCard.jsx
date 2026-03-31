import React from "react";

const PricingCard = ({
  title,
  price,
  duration,
  features,
  buttonText,
  highlighted,
  badge,
}) => {
  return (
    <div
      className={`vv-pricing-card position-relative ${
        highlighted ? "vv-pricing-card-active" : ""
      }`}
    >
      {highlighted && badge && (
        <div className="vv-pricing-badge">
          <span>{badge}</span>
        </div>
      )}

      <div className="vv-pricing-card-body text-center">
        <h3 className="vv-pricing-title">{title}</h3>

        <div className="vv-pricing-price-wrap">
          <span className="vv-pricing-price">{price}</span>
          <span className="vv-pricing-duration">{duration}</span>
        </div>

        <ul className="vv-pricing-feature-list list-unstyled mb-0">
          {features.map((feature, index) => (
            <li key={index} className="vv-pricing-feature-item">
              <span className="vv-pricing-feature-icon">◉</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button type="button" className="vv-pricing-btn">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
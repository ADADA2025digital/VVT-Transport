import React from "react";

const ExpertiseCard = ({
  badge,
  title,
  description,
  features,
  price,
  buttonText,
  image,
}) => {
  return (
    <div className="vv-expertise-card">
      <div className="vv-expertise-badge">
        <span className="vv-expertise-badge-star">★</span>
        <span>{badge}</span>
      </div>

      <div className="vv-expertise-card-inner">
        <div className="vv-expertise-content">
          <h3 className="vv-expertise-title">{title}</h3>

          <p className="vv-expertise-description">{description}</p>

          <ul className="vv-expertise-feature-list list-unstyled mb-0">
            {features.map((feature, index) => (
              <li key={index} className="vv-expertise-feature-item">
                <span className="vv-expertise-feature-icon">◉</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="vv-expertise-bottom">
            <div className="vv-expertise-price">{price}</div>
          </div>
        </div>

        <div className="vv-expertise-image-wrap">
          <img src={image} alt={title} className="vv-expertise-image img-fluid" />
        </div>
      </div>

      {/* <div className="vv-expertise-btn-wrap">
        <button type="button" className="vv-expertise-btn">
          {buttonText}
        </button>
      </div> */}
    </div>
  );
};

export default ExpertiseCard;
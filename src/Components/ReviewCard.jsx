import React from "react";

const ReviewCard = ({ quote, name, active }) => {
  return (
    <div className={`vv-review-card h-100 ${active ? "active" : ""}`}>
      <div className="vv-review-quote-mark">❝</div>

      <p className="vv-review-text">{quote}</p>

      <div className="vv-review-author">— {name}</div>
    </div>
  );
};

export default ReviewCard;
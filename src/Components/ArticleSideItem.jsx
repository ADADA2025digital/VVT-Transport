import React from "react";
import { Link } from "react-router-dom";

const ArticleSideItem = ({ image, title, description, slug }) => {
  return (
    <div className="vv-article-side-item">
      <div className="vv-article-side-img-wrap">
        <img src={image} alt={title} className="img-fluid vv-article-side-img" />
      </div>

      <div className="vv-article-side-content">
        <h3 className="vv-article-side-title">{title}</h3>
        <p className="vv-article-side-text">{description}</p>

        <Link to={`/blog/${slug}`} className="vv-article-readmore">
          [Read More]
        </Link>
      </div>
    </div>
  );
};

export default ArticleSideItem;
import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ post, featured = false }) {
  return (
    <div className={`vv-blog-card ${featured ? "vv-blog-card-featured" : "vv-blog-card-small"}`}>
      
      <div className="vv-blog-card-img-wrap position-relative">
        <img
          src={post.image}
          alt={post.title}
          className="img-fluid w-100 vv-blog-card-img"
        />
        <span className="vv-blog-date-badge">{post.date}</span>
      </div>

      <div className={`vv-blog-card-content ${featured ? "text-center" : ""}`}>
        
        <h3 className={`vv-blog-card-title ${featured ? "vv-blog-card-title-featured" : ""}`}>
          {post.title}
        </h3>

        <p className={`vv-blog-card-desc ${featured ? "vv-blog-card-desc-featured" : ""}`}>
          {post.description}
        </p>

        {/* ✅ FIXED HERE */}
        <Link to={`/blog/${post.slug}`} className="vv-blog-readmore">
          [Read More]
        </Link>

      </div>
    </div>
  );
}

export default BlogCard;
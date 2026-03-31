import React from "react";
import { UserCircle2 } from "lucide-react";

function InsightCard({ item }) {
  return (
    <div className="vv-insight-card">
      <div className="vv-insight-image-wrap position-relative">
        <img src={item.image} alt={item.title} className="img-fluid w-100 vv-insight-image" />
        <span className="vv-insight-date">{item.date}</span>
      </div>

      <div className="vv-insight-content">
        <div className="vv-insight-author">
          <UserCircle2 size={15} />
          <span>{item.author}</span>
        </div>

        <h3 className="vv-insight-title">{item.title}</h3>
        <p className="vv-insight-description">{item.description}</p>

        <a href="#" className="vv-insight-readmore">
          Read More...
        </a>
      </div>
    </div>
  );
}

export default InsightCard;
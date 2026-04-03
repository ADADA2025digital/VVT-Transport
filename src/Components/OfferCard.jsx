import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OfferCard = ({
  id,
  image,
  title,
  description,
  features = [],
  isActive,
  isMobile,
  onToggle,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (isMobile) {
      onToggle(id);
    }
  };

  return (
    <>
      <style>{`
        .vv-offer-card {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 560px;
          border-radius: 14px;
          overflow: hidden;
          background: #3a3a3a;
          box-shadow: var(--vv-shadow);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
          z-index: 1;
        }

        .vv-offer-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.28);
        }

        .vv-offer-card.vv-offer-card-active {
          z-index: 1000;
        }

        .vv-offer-default {
          position: relative;
          z-index: 1;
          height: 100%;
          transition: opacity 0.3s ease;
        }

        .vv-offer-image-wrap {
          position: relative;
          height: 260px;
          overflow: hidden;
        }

        .vv-offer-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.5s ease;
        }

        .vv-offer-card:hover .vv-offer-image,
        .vv-offer-card.vv-offer-card-active .vv-offer-image {
          transform: scale(1.04);
        }

        .vv-offer-badge {
          position: absolute;
          left: 50%;
          top: 185px;
          transform: translateX(-50%);
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: var(--vv-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 16px;
          z-index: 10;
          transition: all 0.5s ease;
        }

        .vv-offer-badge span {
          color: var(--vv-text);
          font-size: 1.05rem;
          line-height: 1.2;
          font-weight: 700;
          display: block;
          width: 100%;
          transition: all 0.35s ease;
        }

        .vv-offer-card:hover .vv-offer-badge,
        .vv-offer-card.vv-offer-card-active .vv-offer-badge {
          left: 0;
          top: 0;
          transform: none;
          width: 100%;
          height: 72px;
          border-radius: 0;
          padding: 16px 20px;
        }

        .vv-offer-card:hover .vv-offer-badge span,
        .vv-offer-card.vv-offer-card-active .vv-offer-badge span {
          font-size: 1rem;
        }

        .vv-offer-content {
          padding: 110px 20px 24px;
          min-height: 280px;
          background: #3a3a3a;
        }

        .vv-offer-description {
          color: var(--vv-text-muted);
          font-size: 0.96rem;
          line-height: 1.8;
          margin: 0;
        }

        .vv-offer-card:hover .vv-offer-default,
        .vv-offer-card.vv-offer-card-active .vv-offer-default {
          opacity: 0;
        }

        .vv-offer-overlay {
          position: absolute;
          inset: 0;
          background: rgba(58, 58, 58, 0.96);
          z-index: 5;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s ease, visibility 0.4s ease;
          padding: 95px 0 0;
          display: flex;
          flex-direction: column;
        }

        .vv-offer-card:hover .vv-offer-overlay,
        .vv-offer-card.vv-offer-card-active .vv-offer-overlay {
          opacity: 1;
          visibility: visible;
        }

        .vv-offer-overlay-content {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.35s ease 0.15s, transform 0.35s ease 0.15s;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .vv-offer-card:hover .vv-offer-overlay-content,
        .vv-offer-card.vv-offer-card-active .vv-offer-overlay-content {
          opacity: 1;
          transform: translateY(0);
        }

        .vv-offer-overlay-body {
          padding: 0 20px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .vv-offer-overlay-description {
          color: rgba(255, 255, 255, 0.82);
          font-size: 0.95rem;
          line-height: 1.75;
          margin: 0 0 22px;
          text-align: left;
        }

        .vv-offer-feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
          flex-grow: 1;
        }

        .vv-offer-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.95rem;
          color: #ffffff;
          margin-bottom: 12px;
          font-weight: 500;
          line-height: 1.5;
          text-align: left;
        }

        .vv-offer-feature-icon {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #f0b12a;
          font-size: 16px;
          min-width: 18px;
          min-height: 18px;
          margin-top: 2px;
        }

        .vv-offer-feature-icon svg {
          width: 16px;
          height: 16px;
        }

        .vv-offer-btn-wrap {
          margin-top: auto;
        }

        .vv-offer-btn {
          width: 100%;
          border: none;
          background: var(--vv-primary);
          color: var(--vv-text);
          padding: 18px 20px;
          font-size: 1rem;
          font-weight: 700;
          transition: all 0.35s ease;
          text-align: center;
          border-top: 1.5px solid #d99b2b;
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 72px;
        }

        .vv-offer-btn:hover {
          background: var(--vv-primary-hover);
        }

        @media (max-width: 991.98px) {
          .vv-offer-card {
            min-height: 540px;
          }

          .vv-offer-image-wrap {
            height: 240px;
          }

          .vv-offer-badge {
            top: 168px;
            width: 138px;
            height: 138px;
          }

          .vv-offer-content {
            padding: 96px 18px 20px;
            min-height: 260px;
          }

          .vv-offer-overlay {
            padding-top: 92px;
          }

          .vv-offer-overlay-body {
            padding: 0 18px 18px;
          }
        }

        @media (max-width: 767.98px) {
          .vv-offer-card {
            min-height: 520px;
            transform: none !important;
            z-index: 1;
          }

          .vv-offer-card.vv-offer-card-active {
            z-index: 1000;
          }

          .vv-offer-image-wrap {
            height: 220px;
          }

          .vv-offer-badge {
            top: 156px;
            width: 128px;
            height: 128px;
            padding: 14px;
          }

          .vv-offer-badge span {
            font-size: 0.95rem;
          }

          .vv-offer-card.vv-offer-card-active .vv-offer-badge {
            height: 64px;
            padding: 12px 16px;
          }

          .vv-offer-content {
            padding: 88px 16px 16px;
            min-height: 230px;
          }

          .vv-offer-description {
            font-size: 0.94rem;
            line-height: 1.7;
          }

          .vv-offer-overlay {
            padding-top: 82px;
          }

          .vv-offer-overlay-body {
            padding: 0 16px 16px;
          }

          .vv-offer-overlay-description {
            font-size: 0.92rem;
            line-height: 1.65;
            margin-bottom: 18px;
          }

          .vv-offer-feature-item {
            font-size: 0.92rem;
            margin-bottom: 10px;
          }

          .vv-offer-btn {
            min-height: 64px;
            padding: 16px;
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div
        className={`vv-offer-card ${isActive ? "vv-offer-card-active" : ""}`}
        onClick={handleCardClick}
      >
        <div className="vv-offer-default">
          <div className="vv-offer-image-wrap">
            <img src={image} alt={title} className="vv-offer-image img-fluid" />
          </div>

          <div className="vv-offer-content">
            <p className="vv-offer-description">{description}</p>
          </div>
        </div>

        <div className="vv-offer-badge">
          <span>{title}</span>
        </div>

        <div className="vv-offer-overlay">
          <div className="vv-offer-overlay-content">
            <div className="vv-offer-overlay-body">
              <p className="vv-offer-overlay-description">{description}</p>

              <ul className="vv-offer-feature-list">
                {features.map((feature, index) => (
                  <li key={index} className="vv-offer-feature-item">
                    <span className="vv-offer-feature-icon">
                      <FaCheckCircle />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="vv-offer-btn-wrap">
              <button
                type="button"
                className="vv-offer-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose?.();
                  navigate("/RequestQuote");
                }}
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
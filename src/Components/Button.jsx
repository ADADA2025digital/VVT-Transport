import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  to,
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`vv-hero-btn vv-hero-btn-${variant} ${className}`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`vv-hero-btn vv-hero-btn-${variant} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
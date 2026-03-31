import React from "react";

const Button = ({
  text,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}) => {
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
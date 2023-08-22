import React from "react";
import "./CtaButton.scss";

const CtaButton = ({ buttonText, variant, disabled, onClick }) => {
  return (
    <button
      className={`ctaButton ${variant ?? ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default CtaButton;

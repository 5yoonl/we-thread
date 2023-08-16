import React from "react";
import "./CtaButton.scss";

const CtaButton = ({ handleButtonAction, buttonText, disabled }) => {
  return (
    <button
      className="ctaButton"
      onClick={handleButtonAction}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default CtaButton;

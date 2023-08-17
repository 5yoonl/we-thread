import React from "react";
import "./Input.scss";

const Input = ({ value, name, type = "text", handleChange, placeholder }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;

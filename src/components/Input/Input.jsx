import React from "react";
import "./Input.scss";

const Input = ({ name, type = "text", handleChange, placeholder }) => {
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

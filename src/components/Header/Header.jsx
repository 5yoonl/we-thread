import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const lastPageHistory = -1;
  const navigate = useNavigate();
  const goBack = () => {
    navigate(lastPageHistory);
  };

  return (
    <header className="header" onClick={goBack}>
      <img src="/images/arrow_left.png" alt="" />
      <span>뒤로</span>
    </header>
  );
};

export default Header;

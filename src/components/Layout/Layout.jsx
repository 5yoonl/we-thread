import React from "react";
import "./Layout.scss";

const Layout = ({ children }) => {
  console.log("hi");
  return (
    <div className="layout">
      <section className="contentsArea">{children}</section>
    </div>
  );
};

export default Layout;

import React from "react";
import "./InputSection.scss";

const InputSection = ({ pageTitle, onChange, children }) => {
  return (
    <section className="inputSection">
      <div className="inputSectionTitle">{pageTitle}</div>
      <div className="inputSectionChildtren" onChange={onChange}>
        {children}
      </div>
    </section>
  );
};

export default InputSection;

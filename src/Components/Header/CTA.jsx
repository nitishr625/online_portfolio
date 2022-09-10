import React from "react";
import Nitish_Resume from "../../assets/Nitish_Resume.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={Nitish_Resume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;

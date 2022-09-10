import React from "react";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

function HeaderSocial() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nitishr25/" target="_blank">
        <ImLinkedin />
      </a>
      <a href="https://github.com/nitishr625" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocial;

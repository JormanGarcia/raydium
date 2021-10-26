import React from "react";
import FullLogo from "../../images/logo.png";
import LogoMin from "../../images/logo.min.png";

function Logo(min = false, { ...props }) {
  return <img src={FullLogo} />;
}

export default Logo;

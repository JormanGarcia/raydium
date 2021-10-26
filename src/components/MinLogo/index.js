import React from "react";
import FullLogo from "../../images/logo.png";
import LogoMin from "../../images/logo.min.png";

function MinLogo(min = false, { ...props }) {
  return <img src={LogoMin} />;
}

export default MinLogo;

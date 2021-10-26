import React from "react";
import Card from "../Card";
import "./style.scss";

const CardRoot = ({ children, className }) => (
  <Card className={"page-description " + className}>{children}</Card>
);

CardRoot.Title = ({ children, ...props }) => (
  <h4 {...props} className="title">
    {children}
  </h4>
);

CardRoot.Description = ({ children, ...props }) => (
  <p {...props} className="description">
    {children}
  </p>
);

export const PageDescription = CardRoot;

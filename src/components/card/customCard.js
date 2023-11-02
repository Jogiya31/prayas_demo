import React from "react";

const CustomCard = ({ children, extra }) => {
  return <div className={`shadow__box ${extra}`}>{children}</div>;
};

export default CustomCard;

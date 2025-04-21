import React from "react";

const Card = (props) => {
  const { children, title } = props;
  return <div style={style}>{children}</div>;
};

export default Card;

import React from "react";

const Footer = (props) => {
  const {children, style} = props
  return (
  <div style={style}>{children}</div>
  );
};

export default Footer;

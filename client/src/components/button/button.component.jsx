import React from "react";

const Button = (props) => {
  const { children, style } = props;
  return (
    <>
      <div className="button-container">
        <button style={style}>{children}</button>
      </div>
    </>
  );
};

export default Button;

import React from "react";

const Button = (props) => {
  const { children } = props;
  return (
    <>
      <div className="button-container">
        <button>{children}</button>
      </div>
    </>
  );
};

export default Button;

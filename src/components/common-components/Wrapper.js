import React from "react";

export default props => {
  const { customClass = "" } = props;
  return <div className={customClass}></div>;
};

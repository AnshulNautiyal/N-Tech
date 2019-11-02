import React from "react";

export const Wrapper = props => {
  const { customClass = "", children = "" } = props;
  return <div className={customClass}>{children}</div>;
};

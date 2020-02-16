import React from "react";

export const Wrapper = props => {
  const { customClass = "", children = "", id = "" } = props;
  return <div className={customClass} id={id}>{children}</div>;
};

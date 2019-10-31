import React from "react";

export default props => {
  const { buttonName = "Button" } = props;

  return <button className="header-button">{buttonName}</button>;
};

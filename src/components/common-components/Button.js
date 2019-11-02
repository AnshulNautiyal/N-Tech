import React from "react";

export default props => {
  const { buttonName = "Button", customClass = "" } = props;

  return <button className={`header-button ${customClass}`}>{buttonName}</button>;
};

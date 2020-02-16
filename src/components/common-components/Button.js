import React from "react";

export default props => {
  const { buttonName = "Button", customClass = "", id = "" } = props;

  return (
    <a type="submit" href={`#${id}`} className={`header-button ${customClass}`}>
      {buttonName}
    </a>
  );
};

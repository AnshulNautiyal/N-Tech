
import React from "react";

export const SubmitButton =  props => {
  const { buttonName = "Button", customClass = "", } = props;

  return (
    <button type="submit" className={`header-button ${customClass}`}>
      {buttonName}
    </button>
  );
};

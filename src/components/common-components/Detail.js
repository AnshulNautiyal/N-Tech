import React from "react";
import Button from "./Button";

function returnNumberOfButtons(noOfButton) {
  if (noOfButton) {
    noOfButton.map((item, index) => {
      const btnName = item.btnName;
      const btnColor = item.color;

      return <Button buttonName={btnName} buttonColor={btnColor}></Button>;
    });
  }
}

export default props => {
  const { heading = "", subHeading = "", noOfButton = [] } = props;
  const BUTTONS = returnNumberOfButtons(noOfButton);
  return (
    <div className="detail-section">
      <h6>{heading}</h6>
      <p>{subHeading}</p>
      <div>{BUTTONS}</div>
    </div>
  );
};

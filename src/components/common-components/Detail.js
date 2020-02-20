import React from "react";
import Button from "./Button";

function returnNumberOfButtons(noOfButton) {
  let totalButton = [];
  if (noOfButton) {
    totalButton = noOfButton.map((item, index) => {
      const btnName = item.btnName;
      const btnColor = item.color;
      const btnClass =
        btnColor === "green" ? "greenButton" : "transparent-button";
      return (
        <Button
          key={index}
          customClass={btnClass}
          buttonName={btnName}
          buttonColor={btnColor}
          id="register"
        ></Button>
      );
    });
  }
  return totalButton;
}

export const Detail = props => {
  const { heading = "", subHeading = "", noOfButton = [] } = props;
  const BUTTONS = returnNumberOfButtons(noOfButton);
  return (
    <div className="detail-section">
      <div className="detail-container">
        <h6>{heading}</h6>
        <p>{subHeading}</p>
        <div>To know more {BUTTONS}</div>
      </div>
    </div>
  );
};

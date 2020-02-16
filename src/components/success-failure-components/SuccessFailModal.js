import React from "react";

function handlePopUp() {
  document.getElementById("SuccessFailModal").style.display = "none";
}
export const SuccessFailModal = () => {
  return (
    <div className="SuccessFailModal-container">
      <div>
        <div></div>
      </div>
      <div>Congratulations!!!</div>
      <div>You have successfully registered.</div>
      <button onClick={handlePopUp}>Continue</button>
    </div>
  );
};

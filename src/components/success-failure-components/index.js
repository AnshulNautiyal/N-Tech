import React from "react";
import { SuccessFailModal } from "./SuccessFailModal";
export const SuccessFailModalParent = () => {
  const success = {
    mesg: "Congratulations!!!",
    button: "Continue"
  };
  const fail = {
    mesg: "Oops!!!",
    button: "Retry"
  };
  return (
    <div className="SuccessFailModal" id="SuccessFailModal">
      <div className="modalHandler">
        <SuccessFailModal />
      </div>
    </div>
  );
};

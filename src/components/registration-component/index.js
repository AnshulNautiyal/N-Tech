import React from "react";
import { RegistrationForm } from "./RegistrationForm";

export const RegistrationParent = props => {
  return (
    <div className="registration">
      <div className="registration-section">
        <h1>Want to work with us? Register</h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

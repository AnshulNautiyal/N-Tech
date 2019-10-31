import React from "react";
import Button from "./../common-components/Button";

export default props => {
  const { logo = "" } = props;
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} className="header-logo" alt="N-Tech logo" />
      </div>
      <div className="header-menu">
        <span>Home</span>
        <span>About Us</span>
        <span>Services</span>
        <span>Contacts</span>

        <Button buttonName="Subscribe"></Button>
      </div>
    </header>
  );
};

import React, { useState } from "react";
import Button from "./../common-components/Button";

function handleHamburgerMenu(setCssClass) {
  return function() {
    setCssClass(currentState => {
      return {
        ...currentState,
        showOrHide: !currentState.showOrHide
      };
    });
  };
}

export const Header = props => {
  const { logo = "" } = props;
  const [toggleMenu, setCssClass] = useState({
    showOrHide: false,
    hide: "hide-hamburger-menu",
    show: "show-hamburger-menu",
    toggleHamburger: "toggler-inner"
  });

  const { showOrHide = "" } = toggleMenu;
  const getCssClassName = showOrHide ? toggleMenu.show : toggleMenu.hide;
  const gethamburgerCssClass = showOrHide ? toggleMenu.toggleHamburger : "";
  const customClass = `header-menu ${getCssClassName}`;
  const customClassHamburger = `inner ${gethamburgerCssClass}`;

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} className="header-logo" alt="N-Tech logo" />
      </div>
      <div
        className="hamburger-menu"
        onClick={handleHamburgerMenu(setCssClass)}
      >
        <div className={customClassHamburger}>
          <div></div>
        </div>
      </div>
      <div className={customClass}>
        <span onClick={handleHamburgerMenu(setCssClass)}>Home</span>
        <span onClick={handleHamburgerMenu(setCssClass)}>About Us</span>
        <span onClick={handleHamburgerMenu(setCssClass)}>Services</span>
        <span onClick={handleHamburgerMenu(setCssClass)}>Contacts</span>

        <Button buttonName="Register" id="register"></Button>
      </div>
    </header>
  );
};

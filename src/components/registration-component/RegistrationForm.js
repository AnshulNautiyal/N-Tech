import React from "react";
import { Input } from "./../common-components/Input";
import { REGISTRATION } from "./../../static/Data/TextData";
import Button from "./../common-components/Button";

function inputList(inputList = []) {
  return inputList.map((item, index) => {
    const {
      type = "text",
      alt = "",
      placeholder = "",
      id = "",
      requiredBool = true
    } = item;
    const { label = "", labelFor = "" } = item;

    return (
      <Input
        key={index}
        type={type}
        alt={alt}
        placeholder={placeholder}
        id={id}
        requiredBool={requiredBool}
        label={label}
        labelFor={labelFor}
      />
    );
  });
}
export const RegistrationForm = props => {
  return (
    <form className="form__group">
      <div className="form__container">{inputList(REGISTRATION)}</div>
      <div className="form__button">
        <Button buttonName="SUBMIT" />
      </div>
    </form>
  );
};

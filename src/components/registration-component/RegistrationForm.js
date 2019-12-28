import React, { useState } from "react";
import { Input } from "./../common-components/Input";
import { REGISTRATION } from "./../../static/Data/TextData";
import Button from "./../common-components/Button";
import { handleSubmit } from "./registration-ajax";

function inputList(inputList = [], setUserInput) {
  return inputList.map((item, index) => {
    const {
      type = "text",
      alt = "",
      placeholder = "",
      id = "",
      requiredBool = true
    } = item;
    const { label = "", labelFor = "" } = item;

    const handleUserInput = event => {
      const { name = "", value = "" } = event.currentTarget;
      setUserInput(currentState => {
        return {
          ...currentState,
          [name]: value
        };
      });
    };

    return (
      <Input
        handleUserInput={handleUserInput}
        name={labelFor}
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
export const RegistrationForm = () => {
  const [userInput, setUserInput] = useState({});
  return (
    <form className="form__group" onSubmit={handleSubmit(userInput)}>
      <div className="form__container">
        {inputList(REGISTRATION, setUserInput)}
      </div>
      <div className="form__button">
        <Button buttonName="SUBMIT" />
      </div>
    </form>
  );
};

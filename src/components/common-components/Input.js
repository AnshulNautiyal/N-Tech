import React from "react";

export const Input = props => {
  const {
    type = "text",
    alt = "",
    placeholder = "",
    id = "",
    requiredBool = true
  } = props;
  const { label = "", labelFor = "" } = props;

  return (
    <div className="form__group--label">
      <input
        onChange={props.handleUserInput}
        name={labelFor}
        type={type}
        id={id}
        className="form__input"
        alt={alt}
        placeholder={placeholder}
        required={requiredBool}
      />
      <label htmlFor={labelFor} className="form__label">
        {label}
      </label>
    </div>
  );
};

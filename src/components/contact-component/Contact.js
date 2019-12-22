import React from "react";
import { Image } from "./../common-components/Image";
import Button from "../common-components/Button";

export const Contact = props => {
  const { fileName = "" } = props;
  return (
    <>
      <Image fileName={fileName} />
      <div className="contact">
        <div className="contact-container">
          <h2>Get in touch with our team</h2>
          <div className="contact-name">
            <input type="text" name="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="contact-phone">
            <input type="text" name="phone" />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="contact-message">
            <textarea type="text" name="message" />
            <label htmlFor="message">Your Message</label>
          </div>
          <Button buttonName="SEND" />
        </div>
      </div>
    </>
  );
};

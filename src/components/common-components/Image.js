import React from "react";
// import workImg from "./../../static/images/work.png";

export const Image = props => {
  const { fileName = "" } = props;
  return (
    <div className="landing-image">
      <img
        src={require(`./../../static/images/${fileName}.png`)}
        alt="N-tech work"
      />
    </div>
  );
};

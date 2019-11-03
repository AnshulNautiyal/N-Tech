import React from "react";
import { Wrapper } from "./../common-components/Wrapper";
import { Landing } from "./Landing-Page";


export const LandingMainPage = props => {

  const { content = "", fileName = "" } = props;
  return (
    <Wrapper customClass="landing-section">
      <Landing detailData={content} fileName={fileName}></Landing>
    </Wrapper>
  );
};

import React from "react";
import { Wrapper } from "./../common-components/Wrapper";
import { Landing } from "./Landing-Page";


export const LandingMainPage = props => {

  const { content = "", fileName = "", extraContent="" } = props;
  return (
    <Wrapper customClass="landing-section" id="header">
      <Landing detailData={content} fileName={fileName} extraContent={extraContent}></Landing>
    </Wrapper>
  );
};

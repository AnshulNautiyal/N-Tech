import React from "react";
import { Wrapper } from "./../common-components/Wrapper";
import { Landing } from "./Landing-Page";
import { INTRO } from './../../static/Data/TextData';

export const LandingMainPage = props => {
  return (
    <Wrapper customClass="landing-section">
      <Landing detailData={INTRO}></Landing>
    </Wrapper>
  );
};

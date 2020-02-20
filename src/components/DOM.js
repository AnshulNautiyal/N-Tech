import React from "react";
import { HeaderMain } from "./header-component";
import { LandingMainPage } from "./main-component";
import { CommonSection } from "./common-section";
import { ServiceParent } from "./service-components";
import { ContactParent } from "./contact-component";
import { RegistrationParent } from "./registration-component";
import { FooterParent } from "./footer-components";
import { INTRO, QUESTIONS } from "../static/Data/TextData";
import { ModalParent } from "./Modal";
import { MoveTopScroll } from "./MoveTopScroll/MoveTopScroll";
import { SuccessFailModalParent } from "./success-failure-components";
import { BigImage } from './common-components/BigImage';

function DOM() {
  return (
    <>
      <BigImage />
      <HeaderMain />
      <LandingMainPage content={INTRO} fileName="work" extraContent="To Know More..."/>
      <CommonSection />
      <ServiceParent />
      <LandingMainPage content={QUESTIONS} fileName="work3" />
      {/* <ContactParent fileName="contact" /> */}
      <ModalParent />
      <SuccessFailModalParent />
      <RegistrationParent />
      <FooterParent />
      <MoveTopScroll />
    </>
  );
}

export default DOM;

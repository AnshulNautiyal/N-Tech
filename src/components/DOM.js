import React from 'react';
import { HeaderMain } from './header-component';
import { LandingMainPage } from "./main-component";
import { CommonSection } from "./common-section";
import { ServiceParent } from './service-components';
import { ContactParent } from './contact-component';
import { RegistrationParent } from './registration-component';
import { FooterParent } from './footer-components';
import { INTRO, QUESTIONS } from '../static/Data/TextData';

function DOM() {

    return (
        <>
            <HeaderMain />
            <LandingMainPage content={INTRO} fileName="work" />
            <CommonSection />
            <ServiceParent />
            <LandingMainPage content={QUESTIONS} fileName="work3" />
            <ContactParent fileName="contact" />
            <RegistrationParent />
            <FooterParent />
        </>
    );
}

export default DOM;
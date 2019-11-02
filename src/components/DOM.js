import React from 'react';
import { HeaderMain } from './header-component';
import { LandingMainPage } from "./main-component";
import { CommonSection } from "./common-section";
import { ServiceParent } from './service-components';

function DOM() {

    return (
        <>
            <HeaderMain />
            <LandingMainPage />
            <CommonSection />
            <ServiceParent />
        </>
    );
}

export default DOM;
import React from 'react';
import { HeaderMain } from './header-component';
import { LandingMainPage } from "./main-component";
import { CommonSection } from "./common-section";

function DOM() {

    return (
        <>
            <HeaderMain />
            <LandingMainPage />
            <CommonSection />
        </>
    );
}

export default DOM;
import React from 'react';
import { Wrapper } from "./../common-components/Wrapper";
import { Section } from "./Section";
import { CHALLENGES } from './../../static/Data/TextData';

export const CommonSection = () => {
    return (
        <Wrapper customClass="challenge-section">
            <Section challenges={CHALLENGES} />
        </Wrapper>
    )
};

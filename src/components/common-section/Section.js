import React from "react";
import { Detail } from "./../common-components/Detail";
import { Image } from "./../common-components/Image";

export const Section = props => {

    const { challenges = "" } = props;

    return (
        <>
            <Image fileName="work2" />
            <Detail {...challenges} />
        </>
    );
};

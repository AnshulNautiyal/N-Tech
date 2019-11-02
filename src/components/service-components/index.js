import React from 'react';
import { ServicesData } from './../../static/Data/TextData';
import { Wrapper } from './../common-components/Wrapper';
import { Service } from './Service';


export const ServiceParent = () => {

    const { header = "", service = [] } = ServicesData;
    return (
        <Wrapper customClass="service-section" >
            <div className="header">
                {header}
            </div>
            <div className="service-list">
                <Service service={service} />
            </div>
        </Wrapper>
    )
}

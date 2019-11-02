import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

function noOfService(service = []) {
    return service.map((item, index) => {

        const subHeading = item.subHeading;
        const content = item.content;
        return (
            <div key={index} className="service-container">
                <div>
                    <FontAwesomeIcon icon={faPaintBrush} />
                </div>
                <h2>{subHeading}</h2>
                <p>{content}</p>
                <a href="#">READ MORE <FontAwesomeIcon icon={faLongArrowAltRight} /></a>
            </div>
        )
    })
}

export const Service = (props = {}) => {

    const { service = [] } = props;
    return (
        <>
            {noOfService(service)}
        </>
    )
};

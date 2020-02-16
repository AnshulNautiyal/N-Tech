import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faLongArrowAltRight, faFileCode, faDesktop, faMobileAlt, faRobot, faTasks } from '@fortawesome/free-solid-svg-icons';


const icons = {
    0: faPaintBrush,
    1: faFileCode,
    2: faDesktop,
    3: faMobileAlt,
    4: faRobot,
    5: faTasks,

}
function noOfService(service = []) {
    return service.map((item, index) => {

        const subHeading = item.subHeading;
        const content = item.content;
        const iconNum = item.logoNumber;

        return (
            <div key={index} className="service-container">
                <div>
                    <FontAwesomeIcon icon={icons[iconNum]} />
                </div>
                <h2>{subHeading}</h2>
                <p>{content}</p>
                {/* <a href="#id">READ MORE <FontAwesomeIcon icon={faLongArrowAltRight} /></a> */}
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

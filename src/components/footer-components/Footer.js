import React from 'react';
import { footerContentData } from './../../static/Data/TextData'

function footerContent() {

    return footerContentData.map((item, index) => {

        const logo = item.logo;
        const header = item.header;
        const dangerHTML = item.dangerHTML;
        const content = item.content;

        const pTag = content.map((contentItem, contentIndex) => {
            return dangerHTML ? <p key={contentIndex} dangerouslySetInnerHTML={{ __html: contentItem }} /> : <p key={contentIndex}>{contentItem}</p>;
        })

        const headerLogo = logo ? <img src={require(`./../../static/images/logo/LogoPNG2.png`)} className="header-logo" alt="N-Tech logo" /> : header;

        return (
            <div className="footer-col" key={index}>
                <div className="footer-header-logo">
                    {headerLogo}
                </div>
                <div className="footer-content">
                    {pTag}
                </div>
            </div>
        );
    })
}


export const Footer = (props) => {

    return footerContent();
}

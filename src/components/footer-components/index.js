import React from 'react';
import { Footer } from './Footer'

export const FooterParent = (props) => {

    return (
        <div className="footer">
            <div className="footer-container">
                <Footer />
            </div>
            <div className="footer-copyright">
                <p>©  2019 N-Tech Service.  All Rights Reserved.  </p>
                <p>Privacy Policy</p>
                <p>FAQ</p>
            </div>
        </div>
    );
}

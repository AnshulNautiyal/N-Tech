import React from 'react';
import { Contact } from './Contact';

export const ContactParent = (props) => {
    const { fileName = "" } = props;
    return (
        <div className="contact-section">
            <Contact fileName={fileName} />
        </div>
    )
}

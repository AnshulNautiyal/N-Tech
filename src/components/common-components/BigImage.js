import React from 'react';
import image from "./../../static/images/banner.jpeg"
export const BigImage = (params) => {
    return (
        <div className="big-image">
            <img src={image} alt="Banner Image" />
        </div>
    )
}

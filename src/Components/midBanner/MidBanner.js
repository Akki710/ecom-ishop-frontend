import React from 'react';
import BannerImage from '../banner/BannerImage';
// Import css
import "./MidBanner.scss";
import MidText from './MidText';

const MidBanner = ({headerTopImage, homeText}) => {
    const {imageUrl} = headerTopImage;

    return (
        <div className="mid-bannner">
            <MidText homeText={homeText} />
            <BannerImage imageUrl={imageUrl} />
        </div>
    );
};

export default MidBanner;

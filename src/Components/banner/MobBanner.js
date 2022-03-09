import React from 'react';
// Import list
import { MobheaderTopImage } from './BannerList';
// Import scss
import "./MobBanner.scss";

const MobBanner = () => {
    const {imageUrl} = MobheaderTopImage;
    return (
        <div 
         className="mobile-banner"
         style={{backgroundImage: 
            `url(${imageUrl})`, 
            backgroundRepeat: "no-repeat",
            WebkitBackgroundSize: "cover"
        }}
        >
        </div>
    );
};

export default MobBanner;

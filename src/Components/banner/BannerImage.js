import React from 'react';

const BannerImage = ({imageUrl, bannerClass}) => {
    return (
        <div className="banner-image-container">
            <img
             className={bannerClass}
             src={imageUrl} 
             alt="header" 
            />
        </div>
    );
};

export default BannerImage;

import React from 'react';
// Import components
import Banner from '../Components/banner/Banner';
import MobBanner from '../Components/banner/MobBanner';
import FeaturedProducts from '../Components/featuredProducts/FeaturedProducts';
import Footer from '../Components/footer/Footer';
import HomeProducts from '../Components/HomeProducts/HomeProducts';
import MidBanner from '../Components/midBanner/MidBanner';
import ServiceFeature from '../Components/serviceFeature/ServiceFeature';
// Import list
import { headerTopImage, homeText } from '../Components/banner/BannerList';

const HomePage = () => {
    return (
        <div className="homepage">
            <Banner />
            <MobBanner />
            <HomeProducts />
            <MidBanner
             headerTopImage={headerTopImage} homeText={homeText}
            />
            <ServiceFeature />
            <FeaturedProducts />
            <Footer />
        </div>
    );
};

export default HomePage;

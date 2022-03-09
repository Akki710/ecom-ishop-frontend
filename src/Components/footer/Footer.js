import React from 'react';
// Import components
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';
import FooterCards from './FooterCards';
// Import css
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <TopFooter />     
            <BottomFooter />
            <FooterCards />
        </div>
    );
};

export default Footer;

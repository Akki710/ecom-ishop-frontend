import React from 'react';
// Import list
import { ServiceList } from './ServiceList';
// Import css
import "./ServiceFeature.scss";

const ServiceFeature = () => {
    return (
        <div className="services">
            {
                ServiceList.map((item, index) => (
                    <div key={index} className="service-item">
                        <p className="service-icon">{item.icon}</p>
                        <h2 className="service-heading">{item.heading}</h2>
                        <p className="service-para">{item.para}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default ServiceFeature;

import React from 'react';
// Import css
import "./PriceFilter.scss";

const PriceFilter = () => {

    const rangeSlide = (event) => {
        const maxPrice = event.target.value;
        event.target.parentElement.childNodes[1].innerText = `Max Price: $${maxPrice}`;
    }

    return (
        <div className="price-filter">
            <div className="slider">
                <h2 className="price-head">PRICES</h2>
                <p id="value">Max Price: $10000</p>
                <input 
                 type="range" 
                 name="range" 
                 min="0" 
                 max="10000"
                 defaultValue="10000"
                 id="ranger"
                 onChange={rangeSlide}
                />
            </div>
        </div>
    );
};

export default PriceFilter;

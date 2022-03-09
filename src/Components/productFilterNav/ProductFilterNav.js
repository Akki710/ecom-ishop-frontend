import React from 'react';
import { FilterNavList } from './FilterNavList';
// Import css
import "./ProductFilterNav.scss";

const ProductFilterNav = () => {
    return (
        <div className="filter-nav">
            <div className="filter-btn">
                {
                    FilterNavList.map((item, index) => (
                        <p key={index} className="options">
                        {
                            item.name
                        }
                        {
                        item.name !== "Items" ?
                            <span className="select">
                            <select>
                            <option>{item.select}</option>
                            </select>
                            </span>
                            : null
                        }
                        </p>
                    ))
                }
            </div>
            <div className="filter-items">
                <p className="filter"><i className="fas fa-filter"></i> Filter</p>
            </div>
        </div>
    );
};

export default ProductFilterNav;

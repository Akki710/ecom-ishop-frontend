import React from 'react';
// Import list
import { TopLeft, TopRight } from './TopNavList';
// Import scss
import "./TopNav.scss";

const TopNav = () => {
    return (
        <div className="top-nav">
            <div className="top-nav-content">
                <div className="top-left">
                    {
                        TopLeft.map((item, index) => (
                            <form key={index}>
                                <label className="label" htmlFor={item.for}>{item.label}</label>
                                <select name={item.name}>
                                    <option>{item.option}</option>
                                </select>
                            </form>
                        ))
                    }
                </div>
                <div className="top-right">
                    <p className="profile"><i className="item-gap far fa-user"></i>{TopRight.profile}</p>
                    <p className="shop-bag"><i className="item-gap fas fa-shopping-bag"></i>{TopRight.bag}</p>
                    <p className="total-price">$0</p>
                    <p className="search"><i className="fas fa-search"></i></p>
                </div>
            </div>
            <hr className="top-nav-hr" />
        </div>
    );
};

export default TopNav;

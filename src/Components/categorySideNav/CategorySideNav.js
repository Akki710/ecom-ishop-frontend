import React from 'react';
import { Link } from 'react-router-dom';
// Import list
import { CategoryList } from './CategoryList';
// Import css
import "./CategorySideNav.scss";

const CategorySideNav = () => {
    return (
        <div className="category-side-nav">
            { 
                CategoryList.map((item, index) => (
                    <div key={index} className="side-items-div">
                        <h2 className="side-head">{item.name}</h2>
                        <div className="side-items">
                            {
                                item.category.map((item, index) => (
                                    <Link
                                     className="side-links"
                                     key={index} 
                                     to={item.to}
                                     >{item.name}</Link>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CategorySideNav;

import React from 'react';
import { Link } from 'react-router-dom';
// Import list
import { HoverCategoryList } from './HoverNavList';

const HoverNav = ({toggleDisplay}) => {
    return (
        <div
         className="hover-nav-wrap" 
         style={{display: toggleDisplay === true ? "block" : "none"}}
        >
        <div className="hover-nav">
            {
                HoverCategoryList.map((item, index) => (
                    <div key={index} className={item.className}>
                        <p>{item.category}</p>
                        <div className="listCollection">
                        {
                            item.list.map((item, index) => (
                                <Link key={index} to={item.to} className="list">
                                {item.item}
                                </Link>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default HoverNav;

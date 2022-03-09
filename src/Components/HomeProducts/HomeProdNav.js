import React from 'react';
import { Link } from 'react-router-dom';
// Import list
import { prodNavItems, title } from './HomeProdList';

const HomeProdNav = () => {
    return (
        <div className="home-prod-nav">
            <h1 className="title">{title.name}</h1>
            <div className="prod-nav-items">
                {
                    prodNavItems.map((item, index) => (
                        <Link
                         key={index} 
                         className="prod-item" 
                         to={item.path}>
                        {item.item}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default HomeProdNav;

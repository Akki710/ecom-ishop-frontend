import React from 'react';
import { Link } from 'react-router-dom';
// Import List
import { BottomFooterList } from './BottomFooterList';

const BottomFooter = () => {
    return (
        <div className="bottom-footer">
            {
                BottomFooterList.map((item, index) => (
                    <div key={index} className="bottom-options">
                        <h3 className="bottom-title">{item.title}</h3>
                        <div className="links-container">
                        {
                            item.links.map((link, index) => (
                                <Link
                                 key={index}
                                 className="bottom-links" 
                                 to="#"
                                >{link.name}</Link>
                            ))
                        }
                        </div>
                    </div>
                ))
            }      
        </div>
    );
};

export default BottomFooter;

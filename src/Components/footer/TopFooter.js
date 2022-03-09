import React from 'react';
// Import list
import { TopFooterList } from './TopFooterList';

const TopFooter = () => {
    return (
        <div className="top-footer">
            {
                TopFooterList.map((item, index) => (
                    <div 
                     key={index} 
                     className="footer-div"
                    >
                        <h3 className={(item.title === "iSHOP" ? "item-brand" : "item-title")}
                        >{item.title}</h3>
                        <p className="item-desc">{item.desc}</p>
                        {
                            item.icons ?
                            <div className="social">
                            {
                                item.icons.map((item, index) => (
                                    <p 
                                     key={index}
                                     className="social-icon"
                                    >
                                    <i className={item.logo}></i>
                                    </p>
                                ))
                            }
                            </div>
                            : null
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default TopFooter;

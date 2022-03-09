import React from 'react';
// Import components
import HotLabel from '../hotLabel/HotLabel';
import CartHover from './CartHover';
// Import css
import "./Card.scss";
import { Link } from 'react-router-dom';

const Card = ({displayHotBox, product}) => {
    const {_id, imageUrl, title, price, rating:{rate}} = product;
    const truncateString = (str, words) => {
        return str.split(" ").splice(0,words).join(" ");
    }
    return (
        <div className="card">
            {
                displayHotBox === true ? <HotLabel /> : null
            }
            <div 
             className="card-image"
             style={{backgroundImage: 
                `url(${imageUrl})`, 
                backgroundRepeat: "no-repeat",
                WebkitBackgroundSize: "cover"
            }}
            >
            { 
                // Display hover cart only in home page
                displayHotBox === true ? <CartHover product={product} /> : null
            }
            </div>
            <Link className="card-link" to={`/product/${_id}`}>
            <div className="card-text">
            <p className="card-head">{truncateString(title, 4)}</p>
            <p className="rating">
            {rate}<i className="star fas fa-star"></i>
            </p>
            <p className="price">${price}<span className="price-line">$999</span></p>
            </div>
            </Link>
        </div>
    );
};

export default Card;

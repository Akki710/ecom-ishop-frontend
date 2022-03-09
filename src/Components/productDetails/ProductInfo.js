import React from 'react';
// Import component
import CtaButton from '../ctaBtn/CtaButton';
// Import list
import { CtaList } from '../CtaList';

const ProductInfo = ({product}) => {

    const {buy} = CtaList;
    const {title, imageUrl, category, price, description, rating:{rate, count}} = product;

    return (
        <div className="product-info">
            <div className="product-left">
                <img
                 src={imageUrl} 
                 alt="product" 
                 className="product-image" 
                />
                <CtaButton cta={buy} product={product} />
            </div>
            <div className="product-right">
                <h2 className="product-title">{title}</h2>
                <p className="category-tag">{category.name}</p>
                <p className="price-badge">${price}</p>
                <p className="rating">{rate}
                <span>
                <i className="star fas fa-star"></i>
                </span>
                <span className="count">{count} ratings</span>
                </p>
                <p className="description-head">Description:</p>
                <p className="description">{description}</p>
            </div>
        </div>
    );
};

export default ProductInfo;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../redux/actions/productAction';
// Import css
import "./CtaButton.scss";

const CtaButton = ({cta, ctaTo, product}) => {
    const path = ctaTo === "/checkout" ? "/cart" : "/cart"
    const dispatch = useDispatch();
    const addToCart = (product) => {
        dispatch(addProductToCart(product));
    }
    return (
        <div className="cta-btn-wrap">
            <Link 
             onClick={() => addToCart(product)}
             to={path}
             className="cta-btn"
             >{cta}</Link>
        </div>
    );
};

export default CtaButton;

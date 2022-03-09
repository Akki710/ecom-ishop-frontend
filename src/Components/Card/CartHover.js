import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../redux/actions/productAction';

// Import css
import "./CartHover.scss";

const CartHover = ({product}) => {
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(addProductToCart(product))
    }

    return (
        <div className="cart-hover-wrap">
            <Link onClick={() => addToCart(product)} to="/cart">
                <i className="cart-hover fas fa-shopping-cart"></i>
            </Link>
        </div>
    );
};

export default CartHover;

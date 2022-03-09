import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// Import list
import { CartListLeft, CartListRight } from './CartList';
// Import css
import "./Cart.scss";
import { Link } from 'react-router-dom';

const Cart = () => {
    const product = useSelector(state => state.addToCart.cart)
    const {title, imageUrl, price} = product;
    let [priceMultiplier, setPriceMultiplier] = useState(1);

    const incrementQty = () => {
        setPriceMultiplier(priceMultiplier + 1);
    }

    const decrementQty = () => {
        if (priceMultiplier >= 1) setPriceMultiplier(priceMultiplier - 1);
    }

    return (
        <div>
        <div className="cart-wrap">
            <div className="cart-head">
                <div><h2>{CartListLeft.name}</h2></div>
                <div className="left-items">
                {CartListRight.map((item, index) => (
                    <h2 key={index}>{item.name}</h2>
                ))}
                </div>
            </div>
            <hr className="head-line" />
            <div className="cart-content">
                <div className="left-items">
                    <img className="image" src={imageUrl} alt="product" />
                    <p className="title">{title}</p>
                </div>
                <div className="right-items">
                    <p className="items">${price * priceMultiplier}</p>
                    <p className="items increDecre">
                    <span className="iconCounter">
                    <i 
                     onClick={decrementQty}
                     className="plus fas fa-minus"></i></span>
                    {priceMultiplier}
                    <span className="iconCounter">
                    <i 
                     onClick={incrementQty}
                     className="plus fas fa-plus"></i></span>
                    </p>
                    <p className="items">${price}</p>
                </div>
            </div>
            <hr className="content-line" />
            <div className="billing">
                <div className="amount">
                    <div className="text">
                        <p>Total</p>
                        <p className="ship">Shipping Fee</p>
                    </div>
                    <div className="money">
                        <p>${price * priceMultiplier}</p>
                        <p className="ship">$20</p>
                    </div>
                </div>
                <hr />
                <div className="total">
                    <h1>TOTAL</h1>
                    <h1>${(price * priceMultiplier) + 20}</h1>
                </div>
                <div className="cta-btn-checkout">
                    <Link 
                     to="#"
                     className="cta-btn"
                    >CHECKOUT</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Cart;

import React from 'react';
import { Link } from 'react-router-dom';

// Import css
import "./ButtonUnderline.scss";

const ButtonUnderline = ({buttonCall}) => {
    const {path, text} = buttonCall;
    return (
        <div className="button-underline">
        <Link style={{color: `${buttonCall.color}`, textDecoration: `underline 0.2rem`}} className="btn-text" to={path}>{text}</Link>
        </div>
    );
};

export default ButtonUnderline;

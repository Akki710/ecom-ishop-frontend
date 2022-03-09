import React from 'react';
// Import list
import { ProductColorList } from './ProductColorList';
// Import css
import "./ProductColor.scss";

const ProductColor = () => {
    return (
        <div className="product-color">
            <div className="content">
                {
                    ProductColorList.map((item, index) => (
                        <div key={index}>
                            <h2 className="color-head">{item.head}</h2>
                            <div className="color-content">
                                {
                                    item.colors.map((color, index) => (
                                        <input
                                         key={index}
                                         type="color" 
                                         value={color.color} 
                                         readOnly
                                         id="colorBox" 
                                        />
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

export default ProductColor;

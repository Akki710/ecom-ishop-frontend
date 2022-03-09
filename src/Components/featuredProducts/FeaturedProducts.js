import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
// Import components
import Card from '../Card/Card';
// Import css
import "./FeaturedProduct.scss";

const FeaturedProducts = () => {

    const products = useSelector(state => state.products.products);
    const displayHotBox = false;

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 606 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 606, min: 0 },
          items: 1
        }
      };
    return (
        <div className="feature-products">
            <h2 className="feature-products-head">FEATURED PRODUCTS</h2>
            <Carousel infinite={true} responsive={responsive}>
            {
                products.filter((item, index) => index <= 5).map(product => (
                    <Card key={product._id} displayHotBox={displayHotBox} product={product} />
                ))
            }
            </Carousel>;
        </div>
    );
};

export default FeaturedProducts;

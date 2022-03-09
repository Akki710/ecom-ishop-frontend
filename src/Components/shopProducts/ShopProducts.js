import React from 'react';
// Import components
import MidBanner from '../midBanner/MidBanner';
import CategorySideNav from '../categorySideNav/CategorySideNav';
import PriceFilter from '../priceFilter/PriceFilter';
import ProductColor from '../productColor/ProductColor';
import ProductFilterNav from '../productFilterNav/ProductFilterNav';
// Import list
import { ShopBannerImage, ShopBannerText } from '../banner/BannerList';
// Import css
import "./ShopProducts.scss";
import ProductDisplay from '../productsDisplay/ProductDisplay';
import Footer from '../footer/Footer';

const ShopProducts = ({page}) => {

    return (
        <div>
        <div className="shop-products">
            <div className="left-coloumn">
                <CategorySideNav />
                <PriceFilter />
                <ProductColor />
            </div>
            <div className="right-coloumn">
                <MidBanner
                 headerTopImage={ShopBannerImage} homeText={ShopBannerText}
                />
                <ProductFilterNav />
                <ProductDisplay page={page} />
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default ShopProducts;

import React from 'react';
// Import components
import PagePath from '../Components/pagePath/PagePath';
import { PageCallList } from '../Components/shopProducts/PageCallList';
import ShopProducts from '../Components/shopProducts/ShopProducts';

const WomensPage = () => {

    const {Women} = PageCallList;

    return (
        <div className="shop-page">
            <PagePath />
            <ShopProducts page={Women} />
        </div>
    );
};

export default WomensPage;

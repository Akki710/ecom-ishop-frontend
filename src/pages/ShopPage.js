import React from 'react';
// Import components
import PagePath from '../Components/pagePath/PagePath';
import { PageCallList } from '../Components/shopProducts/PageCallList';
import ShopProducts from '../Components/shopProducts/ShopProducts';

const ShopPage = () => {

    const {Shop} = PageCallList;

    return (
        <div className="shop-page">
            <PagePath />
            <ShopProducts page={Shop} />
        </div>
    );
};

export default ShopPage;

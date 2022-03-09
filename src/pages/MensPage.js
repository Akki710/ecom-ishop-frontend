import React from 'react';
// Import components
import PagePath from '../Components/pagePath/PagePath';
import { PageCallList } from '../Components/shopProducts/PageCallList';
import ShopProducts from '../Components/shopProducts/ShopProducts';

const MensPage = () => {

    const {Men} = PageCallList;

    return (
        <div className="shop-page">
            <PagePath />
            <ShopProducts page={Men} />
        </div>
    );
};

export default MensPage;

import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// Import actions
import { getAllProducts } from '../../redux/actions/productAction';
// Import components
import HomeProdNav from './HomeProdNav';
import Card from '../Card/Card';
import ButtonUnderline from '../buttonUnderline/ButtonUnderline';
// Import list
import { Loading } from '../Loading';
import { HomeProductSection } from '../buttonUnderline/CallerList';
// Import css
import "./HomeProducts.scss";

const HomeProducts = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    const displayHotBox = true;
    const buttonCall = HomeProductSection;

    const fetchProducts =   async () => {
        const response = await axios
            .get("https://ecomishop-backend.herokuapp.com/api/products")
            .catch(err => console.log("ERROR: ", err))
        dispatch(getAllProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
        // Disabling the dependency pass warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="home-products">
            <HomeProdNav />
            <div className="home-card-wrap">
            {
                products.length === 0 ?
                <div><h1 style={{textAlign: 'center'}}>
                {Loading.message}
                </h1></div>
                : null
            }
            {
                products.filter((item, index) => index <= 4).map(product => (
                    <Card key={product._id} displayHotBox={displayHotBox} product={product} />
                ))
            }
            </div>
            <ButtonUnderline buttonCall={buttonCall} />
        </div>
    );
};

export default HomeProducts;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import axios from 'axios';
// Import actions
import { getAProduct } from '../../redux/actions/productAction';
// Import components
import ProductInfo from './ProductInfo';
// Import list
import { Loading } from '../Loading';
// Import css
import "./ProductDetails.scss";

const ProductDetails = () => {
    const {productId} = useParams();
    
    const product = useSelector(state => state.selectedProduct.selectedProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response =  await axios
                .get(`https://ecomishop-backend.herokuapp.com/api/product/${productId}`)
                .catch(err => console.log("ERR: ", err))
            dispatch(getAProduct(response.data))
        }
        fetchProductDetails();
        // Disabling the dependency pass warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId])

    return (
        <div className="product-details">
            {
                product.length === 0 ?
                <h2 className="loading-message">{Loading.productLoading}</h2>
                : <ProductInfo product={product} />
            }
        </div>
    );
};

export default ProductDetails;

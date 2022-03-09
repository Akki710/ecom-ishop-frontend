import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Import components
import Card from '../Card/Card';
import { getAllProducts } from '../../redux/actions/productAction';
// Import list
import { Loading } from '../Loading';
// Import css
import "./ProductDisplay.scss";

const ProductDisplay = ({page}) => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    const displayHotBox = false;
    // Selecting url based on from where Product Display is called
    let fetchUrl;
    switch(page) {
        case "SHOP":
            fetchUrl = "https://ecomishop-backend.herokuapp.com/api/products"
            break;
        case "MEN":
            fetchUrl="https://ecomishop-backend.herokuapp.com/api/products/6228b2ea09aa694f2ce6ed67"
            break;
        case "WOMEN":
            fetchUrl="https://ecomishop-backend.herokuapp.com/api/products/6228b2f309aa694f2ce6ed69"
            break;
            case "ACCESSORIES":
                fetchUrl="https://ecomishop-backend.herokuapp.com/api/products/6228b30009aa694f2ce6ed6b"
                break;
        case "JEWELLERY":
            fetchUrl = "https://ecomishop-backend.herokuapp.com/api/products/6228b31209aa694f2ce6ed6d"
            break;

        default:
            fetchUrl = "https://ecomishop-backend.herokuapp.com/api/products"
    }
    const fetchProducts =   async () => {
        const response = await axios
            .get(fetchUrl)
            .catch(err => console.log("ERROR: ", err))
        dispatch(getAllProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
        // Disabling the dependency pass warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="product-display">
            <div>
            {
                products.length === 0 ?
                <div><h1 style={{textAlign: 'center'}}>
                {Loading.message}
                </h1></div>
                : null
            }
            <div className="display-card">
            {
                products.map(product => (
                    <Card key={product._id} displayHotBox={displayHotBox} product={product} />
                ))
            }
            </div>
            </div>
        </div>
    );
};

export default ProductDisplay;

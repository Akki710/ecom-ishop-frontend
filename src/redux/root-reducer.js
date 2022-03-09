import { combineReducers } from "redux";
// Import reducers
import { addToCartreducer, productReducer, selectedProductReducer } from "./reducers/productReducer";

export default combineReducers({
    products: productReducer,
    selectedProduct: selectedProductReducer,
    addToCart: addToCartreducer
});

import { productActionTypes } from "../actionTypes/productActionTypes"

export const getAllProducts = (products) => {
    return {
        type: productActionTypes.GET_PRODUCTS,
        payload: products
    }
}

export const getAProduct = (product) => {
    return {
        type: productActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: productActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const addProductToCart = (product) => {
    return {
        type: productActionTypes.ADD_TO_CART,
        payload: product
    }
}

import { productActionTypes } from "../actionTypes/productActionTypes"

const INIT_STATE = {
    products: [],
    selectedProduct: [],
    cart: []
}

export const productReducer = (state=INIT_STATE, {type, payload}) => {
    switch(type) {
        case productActionTypes.GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }

        default:
            return state;
    }
}

export const selectedProductReducer = (state=INIT_STATE, {type, payload}) => {
    switch(type) {
        case productActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: payload
            }
        
        case productActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        
        default:
            return state;
    }
}

export const addToCartreducer = (state=INIT_STATE, {type, payload}) => {
    switch(type) {
        case productActionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: payload
            }

        default:
            return state;
    }
}

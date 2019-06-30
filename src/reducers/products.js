const initialState = {
    products: [],
    showAddProduct: false,
    error: ''
};

export const products = (state = initialState, action) => {
    if (action.type === 'PRODUCTS_GET') {
        return {
            ...state,
            products: action.payload.products
        };
    }

    if (action.type === 'PRODUCTS_SHOW_ADD_PRODUCT') {
        return {
            ...state,
            showAddProduct: true
        }
    }

    if (action.type === 'PRODUCTS_HIDE_ADD_PRODUCT') {
        return {
            ...state,
            showAddProduct: false
        }
    }

    if (action.type === 'PRODUCTS_ADD_PRODUCT_SUCCESS') {
        return {
            ...state,
            showAddProduct: false,
            error: ''
        }
    }

    if (action.type === 'PRODUCTS_ADD_PRODUCT_ERROR') {
        return {
            ...state,
            error: action.payload.error
        }
    }

    return state;
};
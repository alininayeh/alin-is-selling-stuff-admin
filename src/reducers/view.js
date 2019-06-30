const initialState = {
    showProducts: true,
    showAddProduct: false,
    showAddImage: false,
    error: ''
};

export const view = (state = initialState, action) => {
    if (action.type === 'LOGIN_FORM_SUBMIT_ERROR') {
        return {
            ...state,
            error: action.payload.error
        };
    }
    
    if (action.type === 'VIEW_SHOW_ADD_PRODUCT') {
        return {
            ...state,
            showProducts: false,
            showAddProduct: true
        };
    }

    if(action.type === 'VIEW_HIDE_ADD_PRODUCT') {
        return {
            ...state,
            showProducts: true,
            showAddProduct: false,
            error: ''
        };
    }

    if (action.type === 'PRODUCTS_ADD_PRODUCT_ERROR') {
        return {
            ...state,
            error: action.payload.error
        };
    }

    if (action.type === 'VIEW_SHOW_ADD_IMAGE') {
        return {
            ...state,
            showAddImage: true,
            showAddProduct: false,
            error: ''
        };
    }

    if (action.type === 'VIEW_HIDE_ADD_IMAGE') {
        return {
            ...state,
            showAddImage: false,
            showAddProduct: true,
            error: ''
        };
    }

    if (action.type === 'PRODUCT_ADD_IMAGE_SUCCESS') {
        return {
            ...state,
            showAddImage: false,
            showAddProduct: true,
            error: ''
        };
    }

    if (action.type === 'PRODUCT_ADD_IMAGE_ERROR') {
        return {
            ...state,
            error: 'action.payload.error'
        };
    }

    return state;
};
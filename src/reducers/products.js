const initialState = {
    products: [],
    product: {
        name: '',
        description: '',
        image: '',
        price: ''
    }
};

export const products = (state = initialState, action) => {
    if (action.type === 'PRODUCTS_GET') {
        return {
            ...state,
            products: action.payload.products,
            product: initialState.product
        };
    }

    if (action.type === 'PRODUCTS_INPUT_CHANGE') {
        return {
            ...state,
            product: {
                ...state.product,
                [action.payload.key]: action.payload.value
            }
        };
    }

    if (action.type === 'PRODUCT_ADD_IMAGE_SUCCESS') {
        return {
            ...state,
            product: {
                ...state.product,
                image: action.payload.imageUrl
            }
        };
    }

    return state;
};
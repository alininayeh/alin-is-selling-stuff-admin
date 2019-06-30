export const products = (state = [], action) => {
    if (action.type === 'PRODUCTS_GET') {
        return action.payload.products;
    }

    return state;
};
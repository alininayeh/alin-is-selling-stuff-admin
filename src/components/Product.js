import React from 'react';
import {connect} from 'react-redux';
import api from '../utils/api';
import store from '../store';

const getDeleteProductAction = e => {
    const token = store.getState().login.token;

    return async dispatch => {
        const id = e.currentTarget.dataset.id;
        await api.deleteProduct(token, id);
        const products = await api.getProducts();
        dispatch({
            type: 'PRODUCTS_GET',
            payload: products
        });
    };
}

const getEditProductAction = e => ({
  type: 'VIEW_SHOW_EDIT_PRODUCT',
  payload: {data: JSON.parse(e.currentTarget.dataset.product)}
});

const Product = ({data, deleteProduct, editProduct}) => {
    const {name, _id} = data;

    return (
        <div className='Product'>
            <h2>{name}</h2>
            <button data-product={JSON.stringify(data)} className='secondary' onClick={editProduct}>Edit</button>
            <button data-id={_id} onClick={deleteProduct}>Delete</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    deleteProduct: (e) => dispatch(getDeleteProductAction(e)),
    editProduct: (e) => dispatch(getEditProductAction(e))
});

export default connect(null, mapDispatchToProps)(Product);
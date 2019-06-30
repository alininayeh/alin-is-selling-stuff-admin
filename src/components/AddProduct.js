import React from 'react';
import {connect} from 'react-redux';
import api from '../utils/api';
import store from '../store';

const getCancelAction = () => ({
    type: 'PRODUCTS_HIDE_ADD_PRODUCT'
});

const getHandleFormSubmitAction = (e) => {
    e.preventDefault();

    const token = store.getState().login.token;
    const formData = new FormData(e.currentTarget);
    
    return async dispatch => {
        const addProduct = await api.addProduct(token, formData);

        if (!addProduct.error) {
            dispatch({
                type: 'PRODUCTS_ADD_PRODUCT_SUCCESS'
            });
        } else {
            dispatch({
                type: 'PRODUCTS_ADD_PRODUCT_ERROR',
                payload: {
                    error: addProduct.error
                }
            });
        }
        
    };
};

const AddProduct = ({error, cancelAction, handleFormSubmit}) => {
    if (error) alert(error);

    return (
        <div className='AddProduct'>
            <form className='AddProductForm' onSubmit={handleFormSubmit}>
                <input type='text' name='name' placeholder='Name' />
                <textarea name='description' placeholder='Description'></textarea>
                <input type='number' name='price' placeholder='Price' />
                <button>Add product</button>
            </form>
            <button className='secondary' onClick={cancelAction}>Cancel</button>
        </div>
    );
};

const mapStateToProps = state => ({
    error: state.products.error
});

const mapDispatchToProps = dispatch => ({
    cancelAction: () => dispatch(getCancelAction()),
    handleFormSubmit: (e) => dispatch(getHandleFormSubmitAction(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
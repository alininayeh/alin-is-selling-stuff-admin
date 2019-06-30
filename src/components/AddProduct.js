import React from 'react';
import {connect} from 'react-redux';
import api from '../utils/api';
import store from '../store';

const getCancelAction = () => ({
    type: 'VIEW_HIDE_ADD_PRODUCT'
});

const getAddImageAction = () => ({
    type: 'VIEW_SHOW_ADD_IMAGE'
});

const getHandleFormSubmitAction = e => {
    e.preventDefault();

    const token = store.getState().login.token;
    const formData = new FormData(e.currentTarget);
    
    return async dispatch => {
        const addProduct = await api.addProduct(token, formData);

        if (!addProduct.error) {
            dispatch({
                type: 'VIEW_HIDE_ADD_PRODUCT'
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

const getHandleChangeAction = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    
    return {
        type: 'PRODUCTS_INPUT_CHANGE',
        payload: {key, value}
    };
};

const AddProduct = ({error, cancel, addImage, handleFormSubmit, product, handleChange}) => {
    if (error) alert(error);

    return (
        <div className='AddProduct'>
            <form className='AddProductForm' onSubmit={handleFormSubmit}>
                <input type='text' name='name' placeholder='Name' required={true} value={product.name} onChange={handleChange} />
                <textarea name='description' placeholder='Description' required={true} value={product.description} onChange={handleChange}></textarea>
                <input type='number' name='price' placeholder='Price' required={true} value={product.price} onChange={handleChange} />
                {
                    product.image ?
                    <input type='hidden' name='image' value={product.image} /> :
                    <span className='AddProductForm-addImage' onClick={addImage}>Add image</span>
                }
                
                <button>Add product</button>
            </form>
            <button className='secondary' onClick={cancel}>Cancel</button>
        </div>
    );
};

const mapStateToProps = state => ({
    error: state.view.error,
    product: state.products.product
});

const mapDispatchToProps = dispatch => ({
    cancel: () => dispatch(getCancelAction()),
    addImage: () => dispatch(getAddImageAction()),
    handleFormSubmit: (e) => dispatch(getHandleFormSubmitAction(e)),
    handleChange: (e) => dispatch(getHandleChangeAction(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
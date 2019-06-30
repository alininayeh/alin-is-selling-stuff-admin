import React from 'react';
import {connect} from 'react-redux';
import api from '../utils/api';
import store from '../store';

const getCancelAction = () => ({
    type: 'VIEW_HIDE_ADD_IMAGE'
});

const getHandleFormSubmitAction = (e) => {
    e.preventDefault();

    const token = store.getState().login.token;
    const formData = new FormData(e.currentTarget);

    return async dispatch => {
        const addImage = await api.upload(token, formData);

        if (!addImage.error) {
            dispatch({
                type: 'PRODUCT_ADD_IMAGE_SUCCESS',
                payload: {imageUrl: addImage.imageUrl}
            });
        } else {
            dispatch({
                type: 'PRODUCT_ADD_IMAGE_ERROR',
                payload: {error: addImage.error}
            })
        }
    };
};

const AddImage = ({error, cancel, handleFormSubmit}) => {
    if (error) alert(error);
    
    return (
        <div className='AddImage'>
            <form className='AddImageForm' onSubmit={handleFormSubmit}>
                <input type='file' name='image' required={true} />
                <button>Upload image</button>
            </form>
            <button className='secondary' onClick={cancel}>Cancel</button>
        </div>
    );
};

const mapStateToProps = state => ({
    error: state.view.error
});

const mapDispatchToProps = dispatch => ({
    cancel: () => dispatch(getCancelAction()),
    handleFormSubmit: (e) => dispatch(getHandleFormSubmitAction(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddImage);
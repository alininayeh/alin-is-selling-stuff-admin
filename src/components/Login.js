import React from 'react';
import {connect} from 'react-redux';
import api from '../utils/api';

const getHandleSubmitAction = (e) => {
    e.preventDefault();

    return async dispatch => {
        dispatch({type: 'LOGIN_FORM_SUBMIT'});
        const loginRequest = await api.login(new FormData(e.currentTarget));
        if (loginRequest.token) {
            dispatch({type: 'LOGIN_FORM_SUBMIT_SUCCESS', payload: {token: loginRequest.token}});
        } else {
            dispatch({type: 'LOGIN_FORM_SUBMIT_ERROR', payload: {error: loginRequest.error}});
        }
    };
};

const Login = ({handleSubmit, error}) => {
    if (error) alert(error);

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='user' placeholder='Username' required={true} />
                <input type='password' name='pass' placeholder='Password' required={true} />
                <button>Login</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    error: state.login.error
});

const mapDispatchToProps = dispatch => ({
    handleSubmit: (e) => dispatch(getHandleSubmitAction(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
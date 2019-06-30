import React from 'react';
import {connect} from 'react-redux';
import './Login.scss';
import store from '../store';
import api from '../utils/api';

const createHandleChangeAction = (e) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    return {
        type: 'LOGIN_FORM_INPUT_CHANGE',
        payload: {
            inputName: key,
            inputValue: value
        }
    };
};

const createHandleSubmitAction = (e, username, password) => {
    e.preventDefault();

    return async dispatch => {
        dispatch({type: 'LOGIN_FORM_SUBMIT'});
        const loginRequest = await api.login(username, password);
        if (loginRequest.token) {
            dispatch({type: 'LOGIN_FORM_SUBMIT_SUCCESS', payload: {token: loginRequest.token}});
        } else {
            dispatch({type: 'LOGIN_FORM_SUBMIT_ERROR', payload: {error: loginRequest.error}});
        }
    };
};

const Login = ({handleChange, handleSubmit, username, password, error}) => {
    if (error) alert(error);

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' placeholder='Username' required={true} onChange={handleChange} value={username} />
                <input type='password' name='password' placeholder='Password' required={true} onChange={handleChange} value={password} />
                <button>Login</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    username: state.loginForm.username,
    password: state.loginForm.password,
    error: state.loginForm.error
});

const mapDispatchToProps = dispatch => ({
    handleChange: (e) => dispatch(createHandleChangeAction(e)),
    handleSubmit: (e) => {
        const {username, password} = store.getState().loginForm;
        return dispatch(createHandleSubmitAction(e, username, password));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
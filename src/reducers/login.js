export const loginForm = (state = {username: '', password: '', token: sessionStorage.getItem('token'), error: ''}, action) => {
    if (action.type === 'LOGIN_FORM_INPUT_CHANGE') {
        const key = action.payload.inputName;
        const value = action.payload.inputValue;

        return {
            ...state,
            [key]: value,
            error: ''
        };
    }

    if (action.type === 'LOGIN_FORM_SUBMIT') {
        return {
            ...state,
            username: '',
            password: '',
            error: ''
        };
    }

    if (action.type === 'LOGIN_FORM_SUBMIT_SUCCESS') {
        sessionStorage.setItem('token', action.payload.token);
        
        return {
            ...state,
            token: action.payload.token,
            error: ''
        };
    }

    if (action.type === 'LOGIN_FORM_SUBMIT_ERROR') {
        return {
            ...state,
            error: action.payload.error
        };
    }

    return state;
};
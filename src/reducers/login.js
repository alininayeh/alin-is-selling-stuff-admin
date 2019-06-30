const initialState = {
    token: sessionStorage.getItem('token'),
    error: ''
};

export const login = (state = initialState, action) => {
    if (action.type === 'LOGIN_FORM_SUBMIT') {
        return {
            ...state,
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
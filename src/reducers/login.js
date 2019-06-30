const initialState = {
    token: sessionStorage.getItem('token'),
};

export const login = (state = initialState, action) => {
    if (action.type === 'LOGIN_FORM_SUBMIT') {
        return {
            ...state,
        };
    }

    if (action.type === 'LOGIN_FORM_SUBMIT_SUCCESS') {
        sessionStorage.setItem('token', action.payload.token);
        
        return {
            ...state,
            token: action.payload.token,
        };
    }

    return state;
};
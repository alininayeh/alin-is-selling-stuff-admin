import { combineReducers } from 'redux';
import {loginForm} from './login';
import {products} from './products';

export default combineReducers({
    loginForm,
    products
});
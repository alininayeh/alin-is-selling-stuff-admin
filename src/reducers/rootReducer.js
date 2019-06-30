import { combineReducers } from 'redux';
import {login} from './login';
import {products} from './products';

export default combineReducers({
    login,
    products
});
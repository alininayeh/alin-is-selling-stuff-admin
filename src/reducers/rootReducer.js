import { combineReducers } from 'redux';
import {login} from './login';
import {products} from './products';
import {view} from './view';

export default combineReducers({
    login,
    products,
    view
});
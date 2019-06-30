import React from 'react';
import {connect} from 'react-redux';
import Body from './Body';
import Login from './Login';
import isUserLoggedIn from '../utils/isUserLoggedIn';

const App = ({token}) => {
    const isLoggedIn = () => {
        return isUserLoggedIn() || token;
    };

    return (
        <div className='App'>
          {isLoggedIn() ? <Body /> : <Login />}
        </div>
    );
};

const mapStateToProps = state => ({
    token: state.login.token
});

export default connect(mapStateToProps)(App);
import React from 'react';
import {connect} from 'react-redux';
import Body from './Body';
import Login from './Login';

const App = ({token}) => {
    return (
        <div className='App'>
          {token ? <Body /> : <Login />}
        </div>
    );
};

const mapStateToProps = state => ({
    token: state.login.token
});

export default connect(mapStateToProps)(App);
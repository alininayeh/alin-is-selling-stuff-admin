import React from 'react';
import {connect} from 'react-redux';
import Products from './Products';
import AddProduct from './AddProduct';

const Body = ({showAddProduct}) => {
    return (
        showAddProduct ? <AddProduct /> : <Products />
    );
};

const mapStateToProps = state => ({
    showAddProduct: state.products.showAddProduct
});

export default connect(mapStateToProps, null)(Body);
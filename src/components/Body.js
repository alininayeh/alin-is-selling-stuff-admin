import React from 'react';
import {connect} from 'react-redux';
import Products from './Products';
import AddProduct from './AddProduct';
import AddImage from './AddImage';

const Body = ({showProducts, showAddProduct, showAddImage}) => {
    return (
        <React.Fragment>
            {showProducts && <Products />}
            {showAddProduct && <AddProduct />}
            {showAddImage && <AddImage />}
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    showProducts: state.view.showProducts,
    showAddProduct: state.view.showAddProduct,
    showAddImage: state.view.showAddImage
});

export default connect(mapStateToProps, null)(Body);
import React from 'react';
import {connect} from 'react-redux';
import './Products.scss';
import api from '../utils/api';
import Product from './Product';

const getProducts = () => {
    return async dispatch => {
        const products = await api.getProducts();
        dispatch({
            type: 'PRODUCTS_GET',
            payload: products
        });
    };
};

const Products = ({products, getProducts}) => {
    getProducts();

    return (
        <div className='Products'>
            <button>Add product</button>
            <div className='ProductList'>
                {products.map((product, i) => <Product data={product} key={i} />)}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
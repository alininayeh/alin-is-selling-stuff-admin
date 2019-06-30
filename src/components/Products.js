import React from 'react';
import {connect} from 'react-redux';
import api from '../utils/api';
import Product from './Product';

const getProductsAction = () => {
    return async dispatch => {
        const products = await api.getProducts();
        dispatch({
            type: 'PRODUCTS_GET',
            payload: products
        });
    };
};

const getShowAddProductAction = () => ({
    type: 'PRODUCTS_SHOW_ADD_PRODUCT'
});

class Products extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const {products, showAddProduct} = this.props;

        return (
            <div className='Products'>
                <button onClick={showAddProduct}>Add product</button>
                <div className='ProductList'>
                    {products.map((product, i) => <Product data={product} key={i} />)}
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    products: state.products.products
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProductsAction()),
    showAddProduct: () => dispatch(getShowAddProductAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
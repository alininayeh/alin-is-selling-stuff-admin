import React from 'react';

const Product = ({data}) => {
    const {name} = data;

    return (
        <div className='Product'>
            <h2>{name}</h2>
        </div>
    );
};

export default Product;
import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { name, img, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="image" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='add-cart-btn'>Add to Cart</button>

        </div>
    );
};

export default Product;
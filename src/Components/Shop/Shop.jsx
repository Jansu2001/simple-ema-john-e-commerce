import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res=>res.json())
        .then(products=>setProducts(products))


    },[])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {/* <h3>Available Products: { products.length} </h3> */}
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
            </div>
            
        </div>
    );
};

export default Shop;
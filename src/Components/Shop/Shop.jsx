import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../CartSummary/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [productCart, setProductCart] = useState([]);
    console.log(productCart);
    // handleShowAll
    const [showAll,setShowAll]=useState(false)


// Loading Data
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])

    useEffect(() => {
        const storedCart=getShoppingCart()

    },[])


    // Add to Cart Button From Produc.jsx
    const addToCartBtn = (products) => {
        const newCart=[...productCart,products]
        setProductCart(newCart)
        addToDb(products.id)
        
    }

    // handleShowAll
    const handleShowAll = () => {
        setShowAll(true)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {/* <h3>Available Products: { products.length} </h3> */}
                {
                    products.slice(0 , showAll ? 76: 9).map(product => <Product
                        key={product.id}
                        product={product}
                        addToCartBtn={addToCartBtn}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={ productCart}></Cart>
            </div>

            {
                !showAll && (
                    <button onClick={handleShowAll} style={{background:'tomato'}} >Show All</button>
              )  
            }
        </div>
    );
};

export default Shop;
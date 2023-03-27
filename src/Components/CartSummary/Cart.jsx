import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    
    let totalPrice = 0;
    let shippingCharge = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shippingCharge = shippingCharge + product.shipping;
    }
    // Tax
    const tax = totalPrice * 3 / 100;
    // Grand Total
    const grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className='cart-summary'>
            <h2 className='cart-title'>Order Summary</h2>
                <div className='cart-info'>
                    <p>Selected Items: { cart.length}</p>
                <p>Total Price: ${ totalPrice.toFixed(2)}</p>
                <p>Shipping Charge: ${ shippingCharge.toFixed(2)}</p>
                <p>Tax: ${ tax.toFixed(2)}</p>
                <h3>Grand Total: ${ grandTotal.toFixed(2)}</h3>
                </div>
                {/* <div className='cart-info-btn'>
                    <button>Clear Cart</button>
                    <button>Review Order</button>
                </div> */}
        </div>
    );
};

export default Cart;
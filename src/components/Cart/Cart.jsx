import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let totalprice = 0;
    let totalShipping = 0;
    for (const product of cart){
        totalprice = totalprice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalprice*7/100;
    const grandTotal = totalprice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected itemes: {cart.length}</p>
            <p>Total price:$ {totalprice.toFixed(2)}</p>
            <p>Total shiping:$ {totalShipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>Grand total:${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
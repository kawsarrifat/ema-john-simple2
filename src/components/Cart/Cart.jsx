import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = ({cart, handleClearCart, children}) => {

    let totalprice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        totalprice = totalprice + product.price;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalprice*7/100;
    const grandTotal = totalprice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected itemes: {quantity}</p>
            <p>Total price:$ {totalprice.toFixed(2)}</p>
            <p>Total shiping:$ {totalShipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>Grand total:${grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='btn-clear-cart'>
               <span> clear cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                {children}
        </div>
    );
};

export default Cart;
import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart]= useState(savedCart);

    const handaleRemoveCart = (id)=> {
        const remaining = cart.filter(product => product.id !== id);
            setCart(remaining);
            removeFromDb(id);
    }
        
    return (
        <div className='shop-container'>

            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handaleRemoveCart={handaleRemoveCart}
                    ></ReviewItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Order;
import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handaleRemoveCart }) => {
    const { id, img, name, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>price:<span className='orange-text'>{price}</span></p>
                <p>order quantity:<span className='orange-text'>{quantity}</span></p>
            </div>
            <button className='btn-delete'>
                <FontAwesomeIcon onClick={()=> handaleRemoveCart(id)} className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;
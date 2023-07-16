import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const handleAddToCart = ()=>{
        console.log('added items');
    }
    const {img, name, seller, quantity, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p>Price : ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings}</p>
           </div>
           <button onClick={handleAddToCart} className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;
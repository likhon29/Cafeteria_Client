import React from 'react';
import './ReviewItem.css'
import { CiSquareRemove } from 'react-icons/ci';
const ReviewItem = ({product, handleRemoveItem}) => {
    const {id, title, price, quantity, poster} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={poster} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details flex justify-between">
                    <p>{title}</p>
                    <p><small>Price: ${price}</small></p>
                    
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                    <CiSquareRemove/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
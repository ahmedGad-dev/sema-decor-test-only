import React from "react";
import './checkout-item.styles.scss'


const CheckoutItem = ({cartItem, decreaseItem, addItem, clearItem}) => {
    const{name , imageUrl, price, quantity } = cartItem
     return(
      <div className="checkout-item">
        <div className="image-container">
            <img alt='item' src={imageUrl} />
        </div>
        <span className="name">{name}</span>
        <div className="quantity">
            <div className="arrow" onClick={() => decreaseItem(cartItem)} >&#10094;</div>
              <span className="value">{quantity}</span> 
            <div className="arrow" onClick={() => addItem(cartItem)} >&#10095;</div>
        </div>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => clearItem(cartItem)} >&#10005;</div>
      </div>
  )
}


export default CheckoutItem
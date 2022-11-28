import React from "react";
import './checkout.styles.scss'
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { useCartContext } from "../../context/cart.context";
import Modal from "../../components/modal/modal";
import { useEffect } from "react";

const CheckOut = () => {
    const {cartItems, cartCount, addItemToCart, removeItemFromCart, clearItemFromCart, cartTotal} = useCartContext()
  
    return(
        <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>product</span>
            </div>
            <div className="header-block">
                <span>description</span>
            </div>
            <div className="header-block">
                <span>quantity</span>
            </div>
            <div className="header-block">
                <span>price</span>
            </div>
            <div className="header-block">
                <span>remove</span>
            </div>
        </div>

        {
            cartCount === 0 ? <Modal/> : (
            cartItems.map(cartItem => (
                <CheckoutItem 
                key={cartItem.id} 
                addItem={addItemToCart}
                decreaseItem={removeItemFromCart}
                cartItem={cartItem}
                clearItem={clearItemFromCart} />
            )) )
        }

       

        <div className="total">
          <span>Total: ${cartTotal}</span>
        </div>
    </div>       
    )
}





export default CheckOut
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { useCartContext } from '../../context/cart.context'

const CartDropDown = () => {
 
    const navigate = useNavigate()
    const {cartItems} = useCartContext()
    return(
        <div className='cart-dropdown'> 
            <div className='cart-items'>
              {
                cartItems.length?
                cartItems.map(cartItem =>(
                   <CartItem item={cartItem} key={cartItem.id}/>
                )) :
                (         
                  <span className='empty-message'>Cart is empty, please go to
                    <Link to='shop' className='empty-msg-link'>Shop</Link> 
                     to fill it
                  </span>                                
                )
              }
            </div>
            {cartItems.length? 
             <CustomButton
              type='button'
              onClick={() =>{ navigate('/checkout')}}     
              style={{fontSize: 'small'}}>
                 Cart CHECKOUT 
             </CustomButton> : null}         
        </div>
    )
}


export default CartDropDown


import React, {createContext, useContext, useReducer} from 'react'
import cartReducer from '../reducers/cartReducer'
import { actionTypes } from '../reducers/actions'
import { actionCreator } from '../utils/reducers/reducer.utils'

//Helper function creates a new property of quantity to an item if first time add or adds to the quantitiy if existsing
export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)   
  if(existingCartItem){
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
       {...cartItem, quantity: cartItem.quantity + 1} :
        cartItem )
  }
   // if new item we add it to the cart items array with quantity = 1
    return[...cartItems, {...productToAdd, quantity: 1}]    
}

//Used in the checkout page for decreasing cart items in checkout page or remove it if quaantity is 1
const decreaseItemFromCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id) 

  if(existingCartItem.quantity === 1){
     return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }
  
  return cartItems.map(cartItem => cartItem.id === productToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} :
         cartItem )
}


// clear the cart item from cart
const clearItem = (cartItems, product) => {
  return cartItems.filter(cartItem => cartItem.id !== product.id )
}

export const CartContext = createContext()


const INITIAL_STATE = {
   cartOpen: false,
   cartItems: [],
   cartCount: 0,
   cartTotal: 0,
}

export const CartProvider = ({children})  => {

  const[state, dispatch] = useReducer(cartReducer, INITIAL_STATE)


  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, nextItem) => {
      return total + nextItem.quantity
    }, 0)
  
    const newCartTotal = newCartItems.reduce((total, nextItem) => {
      return total + nextItem.quantity * nextItem.price
    }, 0)
  
    dispatch({type: actionTypes.SET_CART_ITEMS,
       payload: {cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal}})
  }


  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem( state.cartItems, productToAdd )
    updateCartItemsReducer(newCartItems)
    dispatch(actionCreator(actionTypes.OPEN_CART))
  }

  const removeItemFromCart = (productToRemove) => {
      const newCartItems = decreaseItemFromCart(state.cartItems, productToRemove)
      updateCartItemsReducer(newCartItems)
  }

  const clearItemFromCart = (product) => {
    const newCartItems = clearItem(state.cartItems, product)
    updateCartItemsReducer(newCartItems)
  }

  const toggleCart = () => {
    dispatch(actionCreator(actionTypes.TOGGLE_CART_OPEN))
  }

  return(
    <CartContext.Provider value={{
        ...state,
        toggleCart,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
    }}>
        {children}
    </CartContext.Provider>
  )
}


export const useCartContext = () => {
  return useContext(CartContext)
}


/*
  const toggleCartOpen = () => {
    dispatch({type: actionTypes.TOGGLE_CART_OPEN})
  }











  */
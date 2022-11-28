import { actionTypes } from "./actions"
import { addCartItem } from "../context/cart.context"

const cartReducer = (state, action) => {
    const{type, payload} = action
    switch(type){
        case actionTypes.SET_CART_ITEMS: 
            return{...state, ...payload}
        case actionTypes.TOGGLE_CART_OPEN:
            return{ ...state,
                    cartOpen: !state.cartOpen} 
        case actionTypes.OPEN_CART:
            return{...state, cartOpen: true}         
        default: throw new Error('unhandled type')
    }
}

export default cartReducer
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useCartContext } from '../../context/cart.context'

const CartIcon = () => { 
   const {toggleCart, cartCount} = useCartContext()

   return(
     <div className="cart-icon" onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">{cartCount}</span>
     </div>
  )
}


export default CartIcon
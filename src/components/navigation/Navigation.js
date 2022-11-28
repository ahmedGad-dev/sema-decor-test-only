import React, {Fragment} from 'react'
import {Link, Outlet} from 'react-router-dom'
import './navigation.scss'
import Logo from '../logo/Logo'
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/CartDropDown'
import {useUserContext} from '../../context/user.context'
import { useCartContext } from '../../context/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const {currentUser} = useUserContext()
  const {cartOpen} = useCartContext()

    return(
      <Fragment>
         <div className='navigation'>
           <Link className="logo-container" to='/'>
              <Logo /> 
           </Link>
           <div className='nav-links-container'> 
            <Link to='/shop' className='nav-link'> Shop </Link>
               {currentUser ?
                 (<span className='nav-link' onClick={signOutUser}> {''} SignOut {''}</span>) :
                 (<Link to='/sign-in' className='nav-link'> Sign In </Link>) 
               }          
            <CartIcon />           
          </div>  
           {cartOpen? <CartDropDown/> : null }                  
        </div>
        <Outlet/>  
      </Fragment>     
    )
}



export default Navigation
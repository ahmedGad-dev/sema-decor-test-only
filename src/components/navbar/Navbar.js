import React, {Fragment} from 'react'
import Logo from '../logo/Logo'
import './navbar.styles.scss'
import {Link, Outlet} from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon'
import {GiHamburgerMenu} from 'react-icons/gi'
import CartDropDown from '../cart-dropdown/CartDropDown'
import {useUserContext} from '../../context/user.context'
import { useCartContext } from '../../context/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'


const Navbar = () => {
  const {currentUser} = useUserContext()
  const {cartOpen} = useCartContext()

  return (
   <Fragment>
    <div className="navbar bg-gray-100 text-white d-flex space-around mb-3 justify-center align-center">
     <div className="navbar-start align-center">
      <div className="dropdown lg:hidden">
       <label tabIndex={0} className="btn btn-ghost btn-accent mr-3 mt-4 lg:hidden ">
        <GiHamburgerMenu className='text-5xl text-black' />
       </label>
       <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white text-gray-700">
         <li><Link to='shop' className='nav-link text-xl hover:bg-gray-100 hover:text-black'>Shop</Link></li>
         <li>
          {currentUser ?
            (<span className='nav-link' onClick={signOutUser}> {''} SignOut {''}</span>) :
             (<Link to='/sign-in' className='nav-link text-xl hover:bg-gray-100 hover:text-black'> Sign In </Link>) 
          }
         </li>   
         <CartIcon/>        
       </ul>
       
      </div>
      <Link className="logo-container  p-2" to='/'>
        <Logo /> 
      </Link>
     </div>
  
   <div className="navbar-end justify-end align-center relative text-gray-700">
    <div className="hidden lg:flex mr-6">
     <ul className="menu menu-horizontal p-0">
      <li className='mr-2'><Link to='shop' className='nav-link'>Shop</Link></li>
      <li>{currentUser ?
         (<span className='nav-link' onClick={signOutUser}> {''} SignOut {''}</span>) :
         (<Link to='/sign-in' className='nav-link'> Sign In </Link>) 
      }</li>
      <li className='mr-2'><Link to='portfolio' className='nav-link'>Portfolio</Link></li>          
     </ul>
     <CartIcon/>
    </div>
 
    <div className=" dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle mt-4 avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt='profile' />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52 bg-white text-gray-700">
        <li className='hover:bg-gray-100 hover:text-black'>
          <Link className="justify-between nav-link text-xl">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li className='hover:bg-gray-100 hover:text-black'><Link className='nav-link text-xl'>Settings</Link></li>
        <li className='hover:bg-gray-100 hover:text-black'><Link className='nav-link text-xl'>Logout</Link></li>
      </ul>
     </div>
    </div>
    {cartOpen? <CartDropDown/> : null }  
   </div>
   <Outlet/>
 </Fragment>
  )
}

export default Navbar
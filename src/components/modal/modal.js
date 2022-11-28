import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {BsCartXFill} from 'react-icons/bs'
import {Link, useNavigate} from 'react-router-dom'
import './modal.styles.scss'
import { useCartContext } from '../../context/cart.context'

const Modal = () => {
  const {closeModal, modalOpen} = useCartContext()
  const navigate = useNavigate()

  
  return(
    <div className={`${modalOpen?  'modal-overlay show-modal' :  'modal-overlay'}`}>
      <div className='modal-container'>
        <h3>Cart is empty, Please go to <span onClick={() => navigate(-1)} className='shop-page-link'>Shop</span> page </h3>
        <BsCartXFill className='icon' />
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  )
}

export default Modal

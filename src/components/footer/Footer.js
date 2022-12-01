import React from 'react'
import './footer.styles.scss'
import {GrTwitter,GrInstagram} from 'react-icons/gr'
import {FaTiktok, FaFacebookF} from 'react-icons/fa'
import {BsTelephone, BsEnvelope} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import styled from 'styled-components'
import EffectButton from '../custom-button/effect-button/EffecfButton'
import Logo from '../logo/Logo'
import { Link } from 'react-router-dom'

const date = new Date()

const Footer = () => {
  return(
   <Wrapper>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        A molestias delectus enim deserunt facere provident?
     </p>

     <div className="form-container">
       <form action="https://formspree.io/f/xeqndrvw" method="POST" className='contact-form'>      
         <input type="email" name="email" className='form-input' placeholder='Enter Your Email'/>
         <EffectButton type='submit' small> Submit </EffectButton>
       </form>
     </div>
    

     <footer className="footer-distributed">
			<div className="footer-left">
				<Logo/>
				<p className="footer-links">
					<Link>HOME</Link>
          <Link>SHOP</Link>
          <Link>SERVICES</Link>
          <Link>ABOUT</Link>
          <Link>CONTACT</Link>
				</p>
				<p className="footer-company-name">Sema Decor © { `${date.getFullYear()}`}</p>
			</div>

			<div className="footer-center">
				<div className='address-icon'>
					{<GoLocation className='contact-icon'/>}
					<p>Zaqatala, Azerabigan 🇦🇿  </p>
				</div>

				<div className='address-icon'>
					{<BsTelephone className='contact-icon'/>}
					<p>+1.555.555.5555</p>
				</div>

				<div className='address-icon'>
					{<BsEnvelope className='contact-icon'/>}
					<p>semadecor@gmail.com</p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-social-icons">
					<Link>{<GrInstagram className='social-icon'/>}</Link>
          <Link>{<GrTwitter className='social-icon'/>}</Link> 
          <Link>{<FaTiktok className='social-icon'/>}</Link>
          <Link>{<FaFacebookF className='social-icon'/>}</Link>
				</div>
			</div>
		</footer>
  </Wrapper>
  )
}


const Wrapper = styled.section`
  background-color: turquoise;
  padding: 2rem 2rem;
  margin-top: 50px;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2rem;
    max-width: 45em;
    color: white;
    font-size: 14px;
    text-decoration: none;
    text-transform: capitalize;
    border: none;
    margin-bottom: 10px;
  }
  .contact-form {
    width: 90vw;
    max-width: 700px;
    margin-bottom: 25px;
  }

  @media(max-width: 800px){
    .contact-form{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      
      .form-input{
        margin-bottom: 1rem;
      }

      .effect-btn {     
        margin-right: 20px;
      }
    }
  }

  @media(max-width: 600px){
    .contact-form .effect-btn {     
      margin-right: 0;
      margin-bottom: 5px;
    }

    .form-container{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }


  .form-input{
    width: 80%;
    height:50px;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-right: 20px;
    color: #777;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media(max-width: 600px){
    .form-input {margin-right: 0px;}
  }

  @media(max-width: 400px){ 
    .contact-form{ margin-bottom: 0; 
       .form-input{margin-bottom: 0;}
    }
  }
  
  
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
    font-size: 16px;
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }   
  }
`

export default Footer
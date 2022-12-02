import React, {useState} from 'react'
import './signin.styles.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { 
      signInWithGooglePopup,
     // createUserDocumentFromAuth,
      signInAuthUserWithEmailAndPassword 
    } from '../../utils/firebase/firebase.utils'

import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const defaultFormFields ={
    email: '',
    password: '',
  }  
  
const SignIn = () => {
    //This is for when redirect takes us to another page we reserve the data in borwser
    const[formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields 
    const navigate = useNavigate()

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
      }

    const signInWithGoogle = async() => {
       await signInWithGooglePopup()
    } 

   const handleSubmit = async(e) => {
      e.preventDefault()      
      try {
         await signInAuthUserWithEmailAndPassword(email, password)     
         resetFormFields()
         navigate('/')
      } catch (error) {
         switch(error.code){
            case 'auth/wrong-password': alert('Password is incorrect, please try again')
             break;
            case 'auth/user-not-found': alert('no user associated with this account')
             break;
            default: console.log(error)
         }
      }
   }

   const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

   return(
       <div className='sign-in'>
           <h2>I already have an account</h2>
           <span>Sign in using email and password</span>
           

           <form onSubmit={handleSubmit}>
               <FormInput type='email' name='email' label='Email' value={email} onChange={handleChange} required />                         
               <FormInput type='password' name='password' value={password} label='Password' onChange={handleChange} required/>   
               <div className="btn-container">
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignin> 
                   Google <FcGoogle className='icon'/>
                </CustomButton>
             </div>                                                      
           </form>        
       </div>
   )
}

   export default SignIn
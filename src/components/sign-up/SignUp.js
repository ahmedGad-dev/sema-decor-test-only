import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import './sign-up.styles.scss'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const defaultFormFields ={
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}  


const SignUp = () => {
   const[formFields, setFormFields] = useState(defaultFormFields)
   const {displayName, email, password, confirmPassword} = formFields

   const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

   const handleSubmit = async(e) => {
        e.preventDefault();   
        if(password !== confirmPassword){
          alert('Passwords aren\'t matching')
          return
        }
        try {
          const {user} = await createAuthUserWithEmailAndPassword(email, password) 
          await createUserDocumentFromAuth(user, {displayName})
          resetFormFields()  
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
              alert('Email already in use please log in')
            } else {alert(error)}
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
         <div className='sign-up'>
             <h2> I dont have an account </h2>
             <span>Sign up with email</span>
             <form className='sign-up-form' onSubmit={handleSubmit}>
               <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required/>
               <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required/>
               <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required/>
               <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm Password' required/>
               <CustomButton type='submit'>Sign Up</CustomButton>
             </form>            
         </div>
      )
   }


export default SignUp
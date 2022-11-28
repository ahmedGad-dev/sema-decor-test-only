import React from 'react'
import './sign-in-up.styles.scss'
import SignIn from '../../components/signin/SignIn'
import SignUp from '../../components/sign-up/SignUp'
const SignInUp = () => {
    return(
        <div className='sign-in-up'>      
           <SignIn/>
           <SignUp/>
        </div>
    )
}

export default SignInUp
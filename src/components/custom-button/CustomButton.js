import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children,  inverted, isGoogleSignin, ...otherProps}) => {
    return(
        <div>
           <button
             className={`custom-button ${inverted?'inverted':''} ${isGoogleSignin? 'google-sign-in':''}`}
                {...otherProps}>
                {children}
           </button>      
        </div>
    )
}

export default CustomButton
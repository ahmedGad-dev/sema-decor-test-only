import React from 'react'
import '../logo/logo.scss'

const LogoText = ({white}) => {
    return(
        <div className='logo-text'>
          <span className={`${white ? 'color-white' : null }`}>Sema</span>
          <span className={`${white ? 'color-white' : 'color-grey' }`}>Decor</span> 
        </div>
    )
}

export default LogoText




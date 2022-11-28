import React from 'react'

import './effect-button.scss'

const EffectButton = ({children, small, green, turqoise}) => {
    return(
         <div 
          className= {`effect-btn effect-btn--white effect-btn--animated ${small ? 'effect-btn--small' : null}
           ${green? 'effect-btn--green' : null } ${turqoise? 'effect-btn--turqoise' : null }`} >
             {children}
        </div>   
    )
}

export default EffectButton
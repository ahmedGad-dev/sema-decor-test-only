import React from "react";

import './head.styles.scss'
import EffectButton from '../custom-button/effect-button/EffecfButton'

const Head = () => {
    return(
        <div className='head'>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Sema</span>
                    <span className="heading-primary--sub">elegant decors</span>
                </h1>                
            </div>
            <EffectButton>Discover all decors</EffectButton>
        </div>
    )
}

export default Head
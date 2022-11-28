import React from 'react'
import './about.styles.scss'
import mask from '../../assets/gallery/logo-1.jpeg'
import EffectButton from '../custom-button/effect-button/EffecfButton'
import {Link} from "react-router-dom"

const About = () => {
    return(
      <section className="section-about bg-transparent">
        <div className="row row-big">
          <div className="about">
           <div className="about__white-area">
                <div className="u-margin-bottom-small">
                  <h2 className="heading-secondary">
                      Choose Your Decor
                  </h2>
                </div>                              
                <img src={mask} alt="heart" className='mask mask-heart mb-12 w-8/12' />    
                <EffectButton turqoise small> <Link className='text-white' to='/shop'>Go To Shop &rarr;</Link>  </EffectButton>      
           </div>
         </div>
      </div>
    </section>
  )
}

export default About

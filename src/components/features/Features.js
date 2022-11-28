import React from 'react'
import './features.styles.scss'
import '../../sass/grid.scss'
import Icons from '../../assets/sprite.svg'

const Features = () => {
  return(
    <div className="section-features">
        <div className="row">
            <div className="col-1-of-4">              
                <div className="feature-box">
                   <svg className='feature-box__icon'>
                      <use xlinkHref= {`${Icons}#icon-lamp`} />
                    </svg>
                    <h3 className="heading-tertiary u-margin-bottom-small">Innovative ideas</h3>
                    <p className="feature-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                    </p>
                </div>
            </div>

            <div className="col-1-of-4">
                <div className="feature-box">
                    <svg className='feature-box__icon'>
                      <use xlinkHref= {`${Icons}#icon-heart-o`} />
                    </svg>
                    <h3 className="heading-tertiary u-margin-bottom-small">make memories</h3>
                    <p className="feature-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                    </p>
                </div>
            </div>

            <div className="col-1-of-4">
                <div className="feature-box">
                    <svg className='feature-box__icon'>
                      <use xlinkHref= {`${Icons}#icon-book-o`} />
                    </svg>
                    <h3 className="heading-tertiary u-margin-bottom-small">book of decors</h3>
                     <p className="feature-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                    </p>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="feature-box">
                    <svg className='feature-box__icon'>
                      <use xlinkHref= {`${Icons}#icon-gift`} />
                    </svg>
                    <h3 className="heading-tertiary u-margin-bottom-small">Romantic gifts</h3>
                    <p className="feature-box__text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                    </p>
                </div>
            </div>                
       </div>   
    </div>
  )
}

export default Features

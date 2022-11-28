import React from "react";
import './card.styles.scss'
import EffectButton from "../custom-button/effect-button/EffecfButton";

const Card = (props) => {
    return(     
        <div className="card">                            
            <div className={`card__side card__side--front`}>
                <div className={`card__picture ${props.color}`}  >                               
                   &nbsp;
                </div>                              
                <div className="card__details">
                   <div className="card__heading">
                      <h2 className={`card__heading-span ${props.cardHead}`}>{props.name}</h2>
                   </div>
                      <ul className="services-list">
                          <li>Service 1</li>
                          <li>Service 2</li>
                          <li>service 3</li>
                          <li>service 4</li>
                      </ul>
                </div>
            </div>
                      
             <div className={`card__side card__side--back ${props.cardBack}`}>                
                 <div className="card__cta">                                   
                     <EffectButton> 
                         Subscribe 
                     </EffectButton>
                  </div>
             </div>
        </div>              
    )
}


export default Card
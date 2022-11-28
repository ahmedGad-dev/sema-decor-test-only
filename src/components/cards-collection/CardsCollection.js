import React from "react";
import Card from "../card/Card";
import { cardsData } from "../../cards.data";
import './cards-collection.scss'
import '../../sass/typography.scss'


const CardsCollection = () => {
    return(
        <div className="collection-section" >
            <h2 className="heading-secondary">top sold services</h2>
            <div className="cards-collection">
             {cardsData.map((card, index) => (
                <Card frontCardImage={card.frontCardImage} key={index}
                    backCardImage={card.backCardImage} name={card.name} color={card.hasOwnProperty('color') && card.color}
                    cardBack={card.cardBack} cardHead={card.cardHead}/>
                 ))} 
            </div>               
        </div>
    )
}

export default CardsCollection
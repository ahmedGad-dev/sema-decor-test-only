import React from "react";
import './product-card.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import { useCartContext } from "../../context/cart.context";

const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product
  const {addItemToCart} = useCartContext()
    return(
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div> 
            <CustomButton className='custom-button' onClick={() => addItemToCart(product)} inverted>Add To Cart</CustomButton>         
        </div>
    )
 }

export default ProductCard
import React from "react";
import { Link } from "react-router-dom";
import './category-prev.styles.scss'
import ProductCart from "../product-card/ProductCard";

const CategoryPrev = ({title, products}) => {
    var width = window.innerWidth
    
    return(
        <div className="collection-preview">
            <h2>
              <Link className="title" to={title}> {title.toUpperCase()} </Link>
            </h2>
            <div className="preview">
               {products.filter((item, index) => index < 8 ).map(product => (
                   <ProductCart key={product.id} product={product}/>
               ))}
            </div>
        </div>
    )
}

export default CategoryPrev
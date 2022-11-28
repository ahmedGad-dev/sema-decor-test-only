import React from 'react'
import './categories-preview.scss'
import CategoryPrev from '../category-prev/CategoryPrev'
import { useCategoriesContext } from '../../context/categories.context'

const CategoriesPreview  = () => {
    const {categoriesMap} = useCategoriesContext()
        return(
            <div className='collections-overview'>
                {
                  Object.keys(categoriesMap).map((key) => {
                    const products = categoriesMap[key]
                    return (<CategoryPrev key={key} title={key} products={products} />)
                  })
                }
            </div>
        )    
}




export default CategoriesPreview
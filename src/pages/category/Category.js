import React, {useContext, useState, useEffect, Fragment} from 'react'
import { useParams } from 'react-router-dom'
import { useCategoriesContext } from '../../context/categories.context'
import './category.styles.scss'
import ProductCart from '../../components/product-card/ProductCard'

const Category = () =>{
  const {category} = useParams()
  const {categoriesMap} = useCategoriesContext()
  const [products, setProducts] = useState(categoriesMap[category])
  
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])


  return (
    <Fragment>
      <h2 className='title1'>{category}</h2>
      <div className='category-container-1'>     
       {products && products.map(product => (
        <ProductCart key={product.id} product={product}  />
       ))}         
      </div>
    </Fragment>  
  )
}

export default Category
import React from 'react'
import './ShopPage.styles.scss'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../../components/categories-preview/CategoriesPreview'
import {useCategoriesContext }from '../../context/categories.context'
import Category from '../category/Category'

//<Route path=':id' element={<Collection/>}/> 
const Shop = () => { 
  const {categoriesMap} = useCategoriesContext()
    return(      
         <div>
           <Routes>
              <Route path='/' element={<CategoriesPreview/>} />
              <Route path=':category' element={<Category/>} />
           </Routes>
        </div>     
    )
}



export default Shop



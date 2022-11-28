import React, {createContext, useState, useEffect, useContext} from 'react'
//import SHOP_DATA from '../shop.data'
import { addCollectionAndDocuments, getCategoriesAndDocuments} from '../utils/firebase/firebase.utils'
import SHOP_DATA from '../shop.data'

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider =({children}) => {
  const[categoriesMap, setCategoriesMap] = useState({})


  useEffect(() => {
    const getCategories = async() => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }

    getCategories()
  }, [])

  useEffect(() => {
    const addCollection = async() => {
      await addCollectionAndDocuments('categories', SHOP_DATA)
    }
    addCollection()
  }, [])

  
  return(
    <CategoriesContext.Provider value={{
        categoriesMap,
        }}
        >
            {children}
    </CategoriesContext.Provider>  )
}


export const useCategoriesContext = () => {
  return useContext(CategoriesContext)
}




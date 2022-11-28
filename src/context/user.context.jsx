import React, { useContext, useEffect, useReducer} from 'react'
import { onAuthChangedListener, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'
import userReducer from '../reducers/userReducer'


export const UserContext = React.createContext()


const INITIAL_STATE = {
  currentUser: null,
  //userLoggedIn: false
}

export const UserProvider = ({children}) => {
  const[state, dispatch] = useReducer(userReducer, INITIAL_STATE)

  //The listener responsible for keeping track of when user signs in and out
  useEffect(() => {
    const unsubscribe = onAuthChangedListener( (user) => {     
      if(user){
        createUserDocumentFromAuth(user)  //if user is new create a new instance in the database
      }
      dispatch({type: 'SET_CURRENT_USER', payload: user}) 
   })
    return unsubscribe
   }, [])

  return (
    <UserContext.Provider value={{
        ...state,
    }}
     >
        {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
    return useContext(UserContext)
  }
  


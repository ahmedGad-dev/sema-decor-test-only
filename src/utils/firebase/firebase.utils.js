import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query, 
    getDocs} from 'firebase/firestore'

import {
     getAuth,
     signInWithPopup,
     signInWithRedirect,
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged} from 'firebase/auth'


const firebaseConfig = {

  apiKey: "AIzaSyD2E5tQOvsDxmC00nhQ1cQfLNW2AH1T9UE",

  authDomain: "sema-decor.firebaseapp.com",

  projectId: "sema-decor",

  storageBucket: "sema-decor.appspot.com",

  messagingSenderId: "1057938080913",

  appId: "1:1057938080913:web:aab1be3e986acb035c6b30"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const db = getFirestore()
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const addCollectionAndDocuments =async(collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((obj) => {
        const docRef = doc(collectionRef, obj.title.toLowerCase())
        batch.set(docRef, obj)
    })
    await batch.commit()
}

export const getCategoriesAndDocuments = async() => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const querySnapShot = await getDocs(q)
    const categoryMap = querySnapShot.docs.reduce((accumlator, docSnap) => {
        const {title, items} = docSnap.data()
        accumlator[title.toLowerCase()] = items
        return accumlator
    }, {})
    return categoryMap
}


export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
    if(!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnap = await getDoc(userDocRef)

    if(!userSnap.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try{
            await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInformation
        })       
         } catch (error) {
            console.log(error)
        }
    }
    return userDocRef
}


export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async() => await signOut(auth)

export const onAuthChangedListener = (fn) => onAuthStateChanged(auth, fn)






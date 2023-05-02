/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut , GithubAuthProvider } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [ user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser= (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () =>{
        return signInWithPopup(auth , gitProvider)
    }
   
    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo ={
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , createUser=>{
            setLoading(false)
            setUser(createUser);
        })

        return ()=>{
            unsubscribe();
        }

    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
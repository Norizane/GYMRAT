import {useContext, createContext, useState} from "react";
import {GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from '../firebase'
import {useEffect} from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    const logOut = () => {
        signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuth = () => {
    return useContext(AuthContext)
}
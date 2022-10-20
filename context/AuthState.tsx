import { useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
import { auth } from '../firebase/config'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


export const useAuth = () => useContext(AuthContext)

const AuthState = ({ children }: any) => {

    const [user, setUser] = useState({});

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const logOut =  () => {
        console.log('user log out')
        return  signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            setUser(currentUser);
            console.log('User', currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    return (

        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthState
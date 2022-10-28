import { useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
import { auth, db } from '../firebase/config'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { addDoc, collection, doc, query } from "firebase/firestore";



export const useAuth = () => useContext(AuthContext)

const AuthState = ({ children }: any) => {

    const [user, setUser] = useState({});

    // const userData = async (data: any) => {
    //     console.log(data)
    //     if (data.length !== 0 && data !== null) {
    //         const userPar = JSON.parse(data)
    //         const value = await addDoc(collection(db, 'users'), { userPar })
    //     }
    // }

    // userData(JSON.stringify(user))

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        console.log('user log out')
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            setUser(currentUser);
            
            // console.log(currentUser)
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
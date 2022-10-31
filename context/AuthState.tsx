import { useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
import { auth, db, provider } from '../firebase/config'
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const useAuth = () => useContext(AuthContext)

const AuthState = ({ children }: any) => {

    const [user, setUser] = useState({});

    const googleSignIn = async () => {

        try {
            const res = (await signInWithPopup(auth, provider)).user
            toast.success('🎉🎊😃😎 You Signed In successfully', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            const userData = {
                'displayName': res.displayName,
                'email': res.email,
                'creationTime': res.metadata.creationTime,
                'photoURL': res.photoURL,
                'uid': res.uid,
                'phoneNumber': res.phoneNumber,
                'lastSignInTime': res.metadata.lastSignInTime,
            }

            const docRef = doc(db, "users", `${res.uid}`);
            const docSnap = await getDoc(docRef);
            // console.log('docSnap', docSnap)

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                await updateDoc(doc(db, 'users', res.uid), {
                    'lastSignInTime': res.metadata.lastSignInTime,
                })
            } else {
                console.log("No such document!");
                await setDoc(doc(db, 'users', res.uid), userData)
            }

        } catch (error) {
            console.log(error)
        }

    }

    const logOut = () => {
        console.log('user log out')
        toast.success('🤯😨😔😥 You Logged Out successfully', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    return (

        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
            {children}
        </AuthContext.Provider>
    )

}

export default AuthState
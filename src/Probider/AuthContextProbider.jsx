import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";



export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthContextProbider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

    const creatUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoding(true)
        return signOut(auth);
    }

    useEffect(()=> {
       const unSubscraibe = onAuthStateChanged(auth,currentUser => {
            console.log('User in the auth state change ',currentUser);
            setUser(currentUser)
            
        setLoding(false)
        })
        return () => {
            unSubscraibe()
        }
    }, [])

    


    const authInfo ={
        user,
        loding,
        creatUser,
        signIn,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProbider;
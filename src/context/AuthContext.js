import { createContext, useContext, useEffect, useState } from "react";
import {onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context) throw new Error("There is no Auth provider");
    return context;
};

export function AuthProvider ({children})
{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    const logout = () => signOut(auth);

    useEffect(()=>{
        console.log("Auth provider loaded");
        const authState = onAuthStateChanged(auth, (currentUser) => {
            //console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => authState();
    }, []);

    return(
        <authContext.Provider value={{user, logout, loading, loginWithGoogle}}>{children}</authContext.Provider>
    );
}

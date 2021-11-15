import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/firebase.init";

initializeAuthentication();

const firebaseAuthentication = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState({})
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            setUser(result.user)
            console.log(result.user);
        }).catch((error) => setError(error.message))
    }
    const logout = () => {
        signOut(auth).then(res => {
            setUser({})
        } )
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        signInWithGoogle,
        logout
    }
}
export default firebaseAuthentication;
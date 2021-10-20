import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthor from "../Firebase/firebase.init";

initAuthor();

const useFirebase = () => {

    const [user, setuser] = useState({})
    const [loading, setloading] = useState(true)


    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const creatUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setuser(userCredential.user);
                // ...
            })
            .catch((error) => {

            });
    }
    const signPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setuser(userCredential.user);

                // ...
            })
            .catch((error) => {

            });
    }
    const googleSign = () => {
        setloading(true);
        return signInWithPopup(auth, provider)

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
            } else {
                setuser({})
            }
            setloading(false);
        })
    }, [])
    const logOut = () => {
        setloading(true)
        signOut(auth).then(() => {
            setuser({})
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => { setloading(false) });
    }

    return {
        user,
        creatUser,
        signPass,
        logOut,
        googleSign,
        loading,
        setloading
    }
}
export default useFirebase;
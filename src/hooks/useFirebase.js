import initFirebaseApp from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initFirebaseApp()

const useFirebase =()=> {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError]= useState('');
    const [loading, setLoading] = useState(true);
    
    
    
    //signup with email and pass
    const signUpEmailPass = (email, password)=> {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //user sign in now
            const user = userCredential.user;
            setUser(user);
            setError('')
            console.log(user)
 
        })
        .catch((error) => {
         
            const errorMessage = error.message;
            setError(errorMessage)
 
        })
        .finally(() => setLoading(false))
    }


    // sign in with email and pass

    const signInEmailPass = (email, password) => {
      
        signInWithEmailAndPassword(auth, email, password)
            setLoading(true)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setError('')
                console.log('signin success');
              
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    }




    //sign out function
    const logOut = () => {
        setLoading(true)
      
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setLoading(false))
            

    }

    //on auth state change 

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              

            } else {
                setUser({})
            }
            setLoading(false)
        });

        return () => unSubscribe


    }, [])







    return {
        signUpEmailPass, logOut, signInEmailPass, user, error, loading
    }
}

export default useFirebase;
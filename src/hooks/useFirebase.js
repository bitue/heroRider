import initFirebaseApp from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initFirebaseApp()

const useFirebase =()=> {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError]= useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin]= useState(false)
    
    
    
    //signup with email and pass
    const signUpEmailPass = (email, password, history, data)=> {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //user sign in now
            const user = userCredential.user;
            setUser(user);
            saveToDatabase(data)
            history.push('/dashboard')
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

    const signInEmailPass = (email, password, history, uri) => {
        setLoading(true)
      
        signInWithEmailAndPassword(auth, email, password)
          
            .then((userCredential) => {
               
                const user = userCredential.user;
                setUser(user)
                setError('')
                console.log('signin success');
                history.push(uri)
              
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


    const saveToDatabase = (data) => {
        fetch('https://mighty-wildwood-88666.herokuapp.com/addUser', {
            method:'POST',
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json() )
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('user added to our database also')

            }
        })
    }


    // check admin
   
    useEffect(()=> {
            fetch(`https://mighty-wildwood-88666.herokuapp.com/adminCheck/${user.email}`)
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                setAdmin(data.admin)
            })
    },[user.email])

    
   









    return {
        signUpEmailPass, logOut, signInEmailPass, user, error, loading, admin
    }
}

export default useFirebase;
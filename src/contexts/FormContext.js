import { createContext, useContext } from "react";
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";
import {getDatabase, set, ref} from "firebase/database";
import { useNavigate } from "react-router-dom";

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = (props) => {
const firebaseConfig = {
    apiKey: "AIzaSyB0gnebBrt1kqD-LIPYzGJatQTVUIb0jgA",
    authDomain: "form-af028.firebaseapp.com",
    projectId: "form-af028",
    storageBucket: "form-af028.appspot.com",
    messagingSenderId: "607652091874",
    appId: "1:607652091874:web:6d4d352586f44bf8e34bbb",
    databaseURL: "https://form-af028-default-rtdb.firebaseio.com"
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);


const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, googleProvider);
} 

    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    };


const loginUser = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
}
    const putData = (key, data) => set(ref(database,key), data);

    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, signInWithGoogle, putData, loginUser, firebaseAuth}}>
            {props.children}
        </FirebaseContext.Provider>
    )
 }

 export default FirebaseProvider;
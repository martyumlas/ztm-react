import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";

const config = {
    apiKey: "AIzaSyCsqZNnLeRwTjoriEQsPWGIxDgpxJOlP0E",
    authDomain: "ztm-react-fbf8a.firebaseapp.com",
    projectId: "ztm-react-fbf8a",
    storageBucket: "ztm-react-fbf8a.appspot.com",
    messagingSenderId: "912607196436",
    appId: "1:912607196436:web:ab06c2cc22d4c37f667e01",
    measurementId: "G-01CWKFR2MT"
}

const app = initializeApp(config)
export const db = getFirestore()
export const auth = getAuth()

export let currentUser;
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})


export const signInWithGoogle = async() => {
    try {
        await signInWithPopup(auth, provider)
    } catch (error) {
        console.log(error.message)
    }   
}


export const signOutWithGoogle = async() => {
    try {
        await signOut(auth)
        console.log('success')
    } catch (error) {
        console.log(error)
    }
}

export default app
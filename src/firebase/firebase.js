import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch} from "firebase/firestore";
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

//saving user profile in firestore
export const createUserProfileDocument = async(userAuth, additionalData) => {

    if(!userAuth) return;

    const docRef = doc(db, 'users', userAuth.uid)
    const docSnap = await getDoc(docRef)

    if(!docSnap.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(docRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message)
        }

    }

    return docRef;
} 


//exporting shop data to firebase

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {

    const batch = writeBatch(db);

    objectsToAdd.forEach((element) => {
        const docRef = doc(collection(db, collectionKey))
        batch.set(docRef, element)
    });

    return await batch.commit()
}



export default app
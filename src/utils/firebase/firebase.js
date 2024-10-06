import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAagRoaLNfuXGxOUFz6tb7khzYKdC3I0Aw",

    authDomain: "crown-clothing-6ec3f.firebaseapp.com",

    projectId: "crown-clothing-6ec3f",

    storageBucket: "crown-clothing-6ec3f.appspot.com",

    messagingSenderId: "160109015309",

    appId: "1:160109015309:web:2f3afac6f94ebe35508044"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    //console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt =  new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createdAt});
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;

}

import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from "../../components/sign-up-form/sign-up-form";

import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const SignIn = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    // }, [])
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }
    const logGoogleRedirect = async () => {
        const { user } = await signInWithGoogleRedirect();
        console.log(user);
    }
    return (
        <>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
            <SignUpForm />
            {/*<button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>*/}
        </>
    );
}


export default SignIn;
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    }
    return (
        <>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
        </>
    );
}


export default SignIn;
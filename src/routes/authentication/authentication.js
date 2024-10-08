import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import './authentication.scss';

import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const Authentication = () => {
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
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
            {/*<button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>*/}
        </div>
    );
}


export default Authentication;
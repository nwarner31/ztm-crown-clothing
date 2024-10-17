import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import { AuthenticationContainer } from './authentication-style';


const Authentication = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    // }, [])
    // const logGoogleRedirect = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log(user);
    // }
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
            {/*<button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>*/}
        </AuthenticationContainer>
    );
}


export default Authentication;
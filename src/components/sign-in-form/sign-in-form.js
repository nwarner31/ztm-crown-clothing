import FormInput from "../form-input/form-input";
import { SignInContainer, ButtonsContainer } from './sign-in-form-style';

import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields(prevState => {return {...prevState, [name]: value}});
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }
    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' name='email' onChange={handleChange} required type='text' value={email} />
                <FormInput label='Password' name='password' onChange={handleChange} required type='password' value={password} />
                <ButtonsContainer>
                    <Button type='submit' >Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google Sign in</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}


export default SignInForm;
import FormInput from "../form-input/form-input";
import './sign-in-form.scss';

import { useState } from "react";
import Button from "../button/button";
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
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' name='email' onChange={handleChange} required type='text' value={email} />
                <FormInput label='Password' name='password' onChange={handleChange} required type='password' value={password} />
                <div className='buttons-container'>
                    <Button type='submit' >Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle} >Google Sign in</Button>
                </div>
            </form>
             </div>
    );
}


export default SignInForm;
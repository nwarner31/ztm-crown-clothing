import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import './sign-up-form.scss';

import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetForm = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {

        const { name, value } = event.target;
        setFormFields(prevState => { return {...prevState, [name]: value}});
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) return;
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            const userDocRef = createUserDocumentFromAuth({...user, displayName });
            resetForm();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }

    }
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type='text' required name='displayName' onChange={handleChange} value={displayName} />
                <FormInput label='Email' type='email' required name='email' onChange={handleChange} value={email} />
                <FormInput label='Password' type='password' required name='password' onChange={handleChange} value={password} />
                <FormInput label='Confirm Password' type='password' required name='confirmPassword' onChange={handleChange} value={confirmPassword} />
                <Button type='submit'>Sign up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;
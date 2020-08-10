import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../Redux/User/UserActions';
import { SignInTitle, ButtonsBarContainer, SignInContainer } from './SignInStyles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({ 
        email: '', 
        password: '' 
    })
    
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value })
    }


    return (
        <SignInContainer> 
            <SignInTitle>I already have and account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit} >
                <FormInput 
                    handleChange={handleChange}
                    type='email'
                    name='email' 
                    value={email} 
                    label='Email'
                    required 
                />
            
                <FormInput 
                    handleChange={handleChange}
                    type='password'
                    name='password' 
                    value={password} 
                    label='Password'
                    required 
                />
                <ButtonsBarContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton 
                        type='button'
                        onClick={googleSignInStart} 
                        isGoogleSignIn
                    >
                        Sign in with Google
                    </CustomButton>
                </ButtonsBarContainer>
            </form>

        </SignInContainer>
    )


}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
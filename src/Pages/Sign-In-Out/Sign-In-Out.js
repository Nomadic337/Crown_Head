import React from 'react';
import SignIn from '../../Component/Sign-In/SignIn';
import SignUp from '../../Component/SignUp/SignUp';
import { SignInAndSignUpContainer } from './Sign-In-Out.Styles';


const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
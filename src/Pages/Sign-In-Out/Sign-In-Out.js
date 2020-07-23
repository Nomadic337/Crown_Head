import React from 'react';
import SignIn from '../../Component/Sign-In/SignIn';
import SignUp from '../../Component/SignUp/SignUp';
import './Sign-In-Out.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;
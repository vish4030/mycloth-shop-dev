
import React from 'react';

import './signin-signup.style.scss';
import SignIn from '../../components/sign-in/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SigninSignup  = ()  => (
    <div className='signin-signup'>
        <SignIn />
        <SignUp /> 
    </div>
)

export default SigninSignup;
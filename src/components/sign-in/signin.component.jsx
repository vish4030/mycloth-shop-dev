
import React from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.uitils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './signin.style.scss';

class SignIn extends React.Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }
     
    handleSubmit = async event => {
     event.preventDefault();

     const {email,password} = this.state;
     try {
     await auth.signInWithEmailAndPassword(email,password);

     this.setState({email:'', password:''})
     } catch(error) {
        console.log('error',error.message);
     }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]:value })
    }


    render() {

        return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>sign in with email password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                    type='email'
                    name='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    lable='email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    handleChange={this.handleChange}
                    value={this.state.password}
                    lable='password'
                    required
                    />

                   <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton  onClick={ signInWithGoogle } isGoogleSignIn >
                         Sign In With Google 
                     </CustomButton>
                     </div>
                </form>
            </div>
        )
    }

}

export default SignIn;
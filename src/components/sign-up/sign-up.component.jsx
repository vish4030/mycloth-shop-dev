
import React from 'react';


import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.style.scss';
import { auth, createUserProfile } from '../../firebase/firebase.uitils';


class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName:'',
            email:'',
            password:'',
            conformPassword:''
        }
    }

    handleSubmit = async event => {
       event.preventDefault();
      
       const {displayName, email, password, conformPassword} = this.state;

       if(password !== conformPassword ) {
           alert('password not match');
           return;
       }

       try{
           const { user } = await auth.createUserWithEmailAndPassword(
               email,
               password
           )
          await createUserProfile(user, {displayName});
          this.setState(
            {
                displayName:'',
                email:'',
                password:'',
                conformPassword:''
            } 
          )

       } catch(error) {
          console.log('error', error.message)
       }

    }

    handleChange = ( event) => {
      const {name,value} = event.target;

      this.setState( {[name]:value} )
    }

    render() {
        const {displayName, email, password, conformPassword} = this.state;
        return(
            <div className='sign-up'>
                <h1 className='title'>I do not have account</h1>
                <span>sign up with email password</span>

                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput 
                      type='text'
                      name='displayName'
                      value={displayName}
                      handleChange = {this.handleChange}
                      lable='name'
                      required
                    />
                     <FormInput 
                      type='email'
                      name='email'
                      value={email}
                      handleChange= {this.handleChange}
                      lable='email'
                      required
                    />
                     <FormInput 
                      type='password'
                      name='password'
                      value={password}
                      handleChange= {this.handleChange}
                      lable='password'
                      required
                    />
                     <FormInput 
                      type='conformPassword'
                      name='conformPassword'
                      value={conformPassword}
                      handleChange= {this.handleChange}
                      lable='conformPassword'
                      required
                    />

                    <CustomButton type='submit' >SIGN UP</CustomButton>
                </form>
                
            </div>
        )
    }
}

export default SignUp;
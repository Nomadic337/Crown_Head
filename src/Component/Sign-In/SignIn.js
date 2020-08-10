import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../Redux/User/UserActions';
import { SignInTitle, ButtonsBarContainer, SignInContainer } from './SignInStyles';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }
    

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }


    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer> 
                <SignInTitle>I already have and account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        handleChange={this.handleChange}
                        type='email'
                        name='email' 
                        value={this.state.email} 
                        label='Email'
                        required 
                    />
                
                    <FormInput 
                        handleChange={this.handleChange}
                        type='password'
                        name='password' 
                        value={this.state.password} 
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

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
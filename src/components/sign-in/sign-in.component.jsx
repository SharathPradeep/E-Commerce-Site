import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        this.setState({email:'',password:''});
    }

    handleChange=(e)=>{
        const {name,value}=e.target;

        this.setState({[name]:value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        required
                        handleChange={this.handleChange}
                        value={this.state.email} label='Email'/>
                    <FormInput
                        name="password" 
                        type="password" 
                        required
                        handleChange={this.handleChange}
                        value={this.state.password} label='Password'/>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;
import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange=(e)=>{
        e.preventDefault();

        const {name,value}=e.target;

        this.setState({[name]:value});
    }

    handleSubmit=async (e)=>{
        e.preventDefault();

        const {displayName,email,password,confirmPassword}=this.state;

        if(password!==confirmPassword){
            alert("Passwords don't match!");
            return;
        }else{
            try{
                const {user}= await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user,{displayName});

                this.setState({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                });
            }
            catch(error){
                console.error(error);
            }
        }
    }

    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName" 
                        type="text" 
                        required
                        handleChange={this.handleChange}
                        value={displayName} label='Display Name'/>
                    <FormInput
                        name="email" 
                        type="email" 
                        required
                        handleChange={this.handleChange}
                        value={email} label='Email'/>
                    <FormInput
                        name="password" 
                        type="password" 
                        required
                        handleChange={this.handleChange}
                        value={password} label='Password'/>
                    <FormInput
                        name="confirmPassword" 
                        type="password" 
                        required
                        handleChange={this.handleChange}
                        value={confirmPassword} label='Confirm Password'/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
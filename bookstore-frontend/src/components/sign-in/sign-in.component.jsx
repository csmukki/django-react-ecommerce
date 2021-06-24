import React from 'react';
import CustomInput from '../custom-input/custom-input.component';
import { connect } from 'react-redux';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { setUserSignIn } from '../../redux/auth/auth.actions';
import { createStructuredSelector } from 'reselect';
import { selectSignIn, selectSignInEmailField, selectSignInPasswordField } from '../../redux/auth/auth.selectors';


class SignIn extends React.Component {

    handleChange = event => {
        const {name, value} = event.currentTarget;
        const {signIn} = this.props;
        const data = {
            ...signIn, 
            [name]: value 
        };
        this.props.setUserSignIn(data);
    };


    handleSubmit = event => {
        event.preventDefault();
        this.props.setUserSignIn({email: "", password: ""});
    };

    render() {
        const {email, password} = this.props;
        return (
            <div className="sign-in">
                <h2>Already have and account</h2>
                <span className="title">Sign in with email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <CustomInput 
                        name="email"
                        onChange={this.handleChange}
                        value={email}
                        type="email"
                        label="Email"
                    />
                    <CustomInput 
                        name="password"
                        onChange={this.handleChange}
                        value={password}
                        type="password"
                        label="Password"
                    />
                    <div className="buttons">
                        <button 
                            onClick={() => auth.signInWithEmailAndPassword(email, password)}
                        >Sign In</button>
                        <button onClick={
                            () => signInWithGoogle()
                        }>Sign in with google</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    email: selectSignInEmailField, 
    password: selectSignInPasswordField, 
    signIn: selectSignIn
});


const mapDispatchToProps = dispatch => ({
    setUserSignIn: data => dispatch(setUserSignIn(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Joi from "joi-browser";
import { withRouter } from 'react-router-dom';

import { setUserSignUp } from '../../redux/auth/auth.actions';

import {selectSignUpUsernameField, 
        selectSignUpEmailField, 
        selectSignUpPasswordField, 
        selectSignUpErrorsField, 
        selectSignUpConfirmPasswordField,
        selectSignUp} from '../../redux/auth/auth.selectors';


import CustomInput from '../custom-input/custom-input.component';
import Form from '../form/form.component';



class SignUp extends Form {

    constructor(props) {
        super(props);
        this.schema = {
            username: Joi.string().min(5).required().label("Username"),
            email: Joi.string().email().required().label("Email"),
            password: Joi.string().min(8).alphanum().required().label("Password"),
            confirmPassword: Joi.string()
              .min(8)
              .alphanum()
              .required()
              .label("Confirm Password"),
        };
    }


    render() {
        const {username, email, password, confirmPassword, errors} = this.props;
        return(
            <div className="sign-up">
                <h2 className="title">Sign up with email and password</h2>
                <form onSubmit={this.handleSubmit}>
                    <CustomInput 
                        name="username"
                        type="text"
                        value={username}
                        onChange={this.handleChange}
                        label="Username"
                        error={errors['username']}
                    />
                    <CustomInput 
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        error={errors['email']}
                    />
                    <CustomInput 
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        error={errors['password']}
                    />
                    <CustomInput 
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        error={errors['confirmPassword']}
                    />
                    <button>SIGN UP</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = createStructuredSelector({
    username: selectSignUpUsernameField, 
    email: selectSignUpEmailField, 
    password: selectSignUpPasswordField, 
    confirmPassword: selectSignUpConfirmPasswordField, 
    errors: selectSignUpErrorsField, 
    signUp: selectSignUp
});

const mapDispatchToProps = dispatch => ({
    setUserSignUp: data => dispatch(setUserSignUp(data))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
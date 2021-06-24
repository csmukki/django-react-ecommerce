import React from 'react';
import Joi from "joi-browser";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';



class Form extends React.Component {

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        const { username, email, password, confirmPassword, errors } = this.props;
        const errorMessage = this.validateProperty(name, value);
        const data = {
          username,
          email,
          password,
          confirmPassword,
          [name]: value, 
          errors: {
              ...errors, 
              [name]: errorMessage
          },
        };
        this.props.setUserSignUp(data);
      };
      
      validateProperty = (name, value) => {
        const subSchema = { [name]: this.schema[name] };
        const data = { [name]: value };
        const {error} = Joi.validate(data, subSchema);
        if(error) {
          return error.details[0].message
        }
        return null;
      };
      
      handleSubmit = async (event) => {
        event.preventDefault();
        const {history, username, email, password, confirmPassword} = this.props;
        if(password !== confirmPassword) {
          alert("Password should be equal", username);
        }else {
          try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            return await createUserProfileDocument(user, username) ? (
              history.push('/')
            ) : null;
          }catch(error) {
            alert("ERROR in creating user...")
          }
        }
      };

}

export default Form;
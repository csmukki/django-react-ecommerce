import React from 'react';
import Joi from "joi-browser";


class Form extends React.Component {

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        const { username, email, password, confirmPassword, errors } = this.props;
        this.validateProperty(name, value);
        // const data = {
        //   username,
        //   email,
        //   password,
        //   confirmPassword,
        //   errors: {
        //       ...errors, 
        //       [name]: errorMessage || ""
        //   },
        // };
        // data[name] = value;
        // this.props.setUserSignUp(data);
      };
      
      validateProperty = (name, value) => {
        const subSchema = { [name]: this.schema[name] };
        const data = { [name]: value };
        const result = Joi.validate(data, subSchema);
       console.log(result);
      };
      
      handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password, confirmPassword } = this.props;
        if (password !== confirmPassword) {
          alert("Password should be equal...");
        }
        alert("SIGN UP COMPLETED::");
      };
}


export default Form;
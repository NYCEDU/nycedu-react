import React, { Component } from 'react';
import './SignupForm.css';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import illustration from './sign_up_illustration.svg';

class SignupForm extends Component {

  render() {
    return (
      <form className="signup">
        <img src={illustration} role="presentation" />
        <h2>Join the community!</h2>
        <p>Sign up to stay informed regarding all things education and NYC</p>
        <TextField
          hintText="Enter your email..."
          floatingLabelText="Email"
          type="email"
          id="email"
          required={true} />
        <RaisedButton label="Join us!" primary={true} type="Submit" />
      </form>
    );
  }
}

export default SignupForm;
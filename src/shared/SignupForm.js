import React, { Component } from 'react';
import './SignupForm.css';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import illustration from './sign_up_illustration.svg';

class SignupForm extends Component {

  static defaultProps = {
    displayImage: true
  }

  render() {
    const displayImage = this.props.displayImage;
    let signupImageElement = displayImage === true ? <img src={illustration} role="presentation" />  : '';
    return (
      <form className="signup">
      {signupImageElement}
        <h2>Join the community!</h2>
        <p>Sign up to stay informed regarding all things education and NYC</p>
        <TextField
          hintText="Enter your email..."
          floatingLabelText="Email"
          type="email"
          id="email"
          required={true} />
        <FlatButton style={{verticalAlign:"4px"}} label="Submit" hoverColor="#80BB41" type="Submit" />
      </form>
    );
  }
}

export default SignupForm;
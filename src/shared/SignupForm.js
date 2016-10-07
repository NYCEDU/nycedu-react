import React, { Component } from 'react';
import './SignupForm.css';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import illustration from './sign_up_illustration.svg';

class SignupForm extends Component {

  render() {
    return (
      <form className="signup">
        <img src={illustration} />
        <h2>Join the community!</h2>
        <p>Sign up to stay informed regarding all things education and NYC</p>
        <TextField
          hintText="Enter your email..."
          floatingLabelText="Email"
          type="email"
          id="email"
          required={true} />
        <div className="extendedForm">
          <div className="signup-options">
            <Checkbox
              className="option"
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              label="Climbing Group" />
            <Checkbox
              className="option"
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              label="Brunch" />
            <Checkbox
              className="option"
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              label="Slack" />
          </div>
        </div>

        <RaisedButton label="Join us!" primary={true} type="Submit" />
      </form>
    );
  }
}

export default SignupForm;
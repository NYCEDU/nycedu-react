import React, { Component } from 'react';
import './SignupForm.css';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

class SignupForm extends Component {
  state = {
    formExpanded: false
  };

  expandForm() {
    this.setState({formExpanded:true});
  }

  render() {
    let style = {
      display: this.state.formExpanded ? 'block':'none'
    }
    return (
      <form className="signup">
        <TextField
          hintText="Enter your email..."
          floatingLabelText="Email"
          type="email"
          id="email"
          required={true}
          onFocus={this.expandForm.bind(this)} />
        <div className="extendedForm" style={style}>
          <p>Select any other things you are interested in outside of the newsletter.</p>
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label="Climbing Group" />
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label="Brunch" />
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label="Slack" />
        </div>

        <RaisedButton label="Join us!" primary={true} type="Submit" />
      </form>
    );
  }
}

export default SignupForm;
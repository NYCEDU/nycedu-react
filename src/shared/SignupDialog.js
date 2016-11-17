import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import SignupForm from './SignupForm';
import FlatButton from 'material-ui/FlatButton';

export default class SignupDialog extends Component {

  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    var buttonStyle = {
      color: '#8BC34A',
      backgroundColor: 'white',
      margin: '8px'
    };

    return (
      <span>
        <FlatButton label="Sign Up" onTouchTap={this.handleOpen} style={buttonStyle}/>
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <SignupForm displayImage={false} />
        </Dialog>
      </span>
    );
  }
}
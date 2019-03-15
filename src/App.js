import React, { Component } from 'react';
import './App.css';

import DocumentTitle from 'react-document-title';

//Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import SignupDialog from './shared/SignupDialog';
import theme from './theme';
import iconFacebook from './icon-facebook.svg';
import iconTwitter from './icon-twitter.svg';

class App extends Component {

  state = {
    open: false,
    toastMessage: '',
    toastColor: '#000',
    toastOpen: false
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleToast = (msg, color) => {
    this.setState({
      toastMessage: msg,
      toastColor: color,
      toastOpen: true
    });
  }

  render() {

    var iconStyle = {
      fill: 'white',
      height: '24px',
      padding: '8px',
      boxSizing: 'content-box'
    }

    const rightButtons = (
      <div>
        <a
          href="http://www.facebook.com/hellonycedu/"
          target="_blank"
        >
          <img
            src={iconFacebook}
            role="presentation"
            style={iconStyle}
          />
        </a>
        <a
          href="https://twitter.com/NYCEDUretweets"
          target="_blank"
        >
          <img
            src={iconTwitter}
            role="presentation"
            style={iconStyle}
          />
        </a>
        <SignupDialog handleToast={this.handleToast} />
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className="App">
          <DocumentTitle title="NYCEDU: Making a difference in NYC together" />
          <AppBar style={{position:'fixed', top: 0}}
            title={
              <a href="/" className="home-button"> {this.props.children.props.route.title + ' - #nycedu'} </a>}
            onLeftIconButtonTouchTap={this.handleOpen}
            iconElementRight={rightButtons} />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})} >
            <MenuItem leftIcon={<i className="material-icons">home</i>} href="/">Home</MenuItem>
            <MenuItem leftIcon={<i className="material-icons">event</i>} href="/events">Events</MenuItem>
            <MenuItem leftIcon={<i className="material-icons">account_balance</i>} href="/organizations">Organizations</MenuItem>
          </Drawer>
          { React.cloneElement(this.props.children, {handleToast: this.handleToast}) }
           <Snackbar
            open={this.state.toastOpen}
            message={this.state.toastMessage}
            autoHideDuration={4000}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;

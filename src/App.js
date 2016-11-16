import React, { Component } from 'react';
import './App.css';

import DocumentTitle from 'react-document-title';

//Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import theme from './theme';

class App extends Component {

  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {

    var buttonStyle = {
      color: '#8BC34A',
      backgroundColor: 'white',
      verticalAlign: 'text-bottom'
    };

    const rightButtons = (
      <div>
        <IconButton
          iconClassName="material-icons"
          tooltip="Share on Facebook"
          iconStyle={{
            color:'#fff'
          }}
          touch="true"
          >
          face
        </IconButton>
        <IconButton
          iconClassName="material-icons"
          tooltip="Share on Twitter"
          iconStyle={{
            color:'#fff'
          }}
          touch="true"
          >
          Book
        </IconButton>
        <FlatButton label="Sign Up" style={buttonStyle}/>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className="App">
          <DocumentTitle title="NYCEDU: Making a difference in NYC together" />
          <AppBar style={{position:'fixed', top: 0}}
            title={
              <a href="/" className="home-button"> {this.props.children.props.route.title + ' - #nycedu'} </a>}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={rightButtons} />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})} >
            <MenuItem leftIcon={<i className="material-icons">home</i>} href="/">Home</MenuItem>
            <MenuItem leftIcon={<i className="material-icons">face</i>} href="/community">Community</MenuItem>
            <MenuItem leftIcon={<i className="material-icons">event</i>} href="/events">Events</MenuItem>
            <MenuItem leftIcon={<i className="material-icons">account_balance</i>} href="/organizations">Organizations</MenuItem>
          </Drawer>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;


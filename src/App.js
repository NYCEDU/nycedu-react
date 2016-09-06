import React, { Component } from 'react';
import './App.css';

import DocumentTitle from 'react-document-title';

//Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import theme from './theme';


class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className="App">
          <DocumentTitle title="NYCEDU: Making a difference in NYC together" />
          <AppBar title={<a href="/"
                            className="home-button">
                              {this.props.children.props.route.title + ' - #nycedu'}
                          </a>}
                  iconElementRight={<FlatButton label="About" href="/about"/>}
                  style={{position:'fixed', top: 0}}
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;


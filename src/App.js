import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './App.css';
import Home from './Home';
import About from './About';

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
          <AppBar title={this.props.children.props.route.title + ' - #nycedu'}
            iconElementRight={<FlatButton label="About" href="/about"/>}
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} title="Home" />
      <Route path="about" component={About} title="About" />
    </Route>
  </Router>
), document.body)


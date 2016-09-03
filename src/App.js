import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './App.css';
import Home from './home/Home';
import Community from './community/Community';
import Events from './events/Events';
import Sponsor from './sponsor/Sponsor';

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
                  style={{position:'fixed', top: 0}}
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
      <Route path="community" component={Community} title="Community" />
      <Route path="events" component={Events} title="Events" />
      <Route path="sponsor" component={Sponsor} title="Sponsor" />
    </Route>
  </Router>
), document.body)


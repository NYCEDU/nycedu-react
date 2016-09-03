import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home/Home';
import Community from './community/Community';
import Events from './events/Events';
import Sponsor from './sponsor/Sponsor';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} title="Home" />
      <Route path="community" component={Community} title="Community" />
      <Route path="events" component={Events} title="Events" />
      <Route path="sponsor" component={Sponsor} title="Sponsor" />
    </Route>
  </Router>,
  document.getElementById('root')
);
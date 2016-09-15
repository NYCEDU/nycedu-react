import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';
import './bootstrapGrid.css';

import App from './App';
import Home from './home/Home';
import Community from './community/Community';
import Events from './events/Events';
import Projects from './projects/Projects';
import Organizations from './organizations/Organizations';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} title="Home" />
      <Route path="community" component={Community} title="Community" />
      <Route path="events" component={Events} title="Events" />
      <Route path="projects" component={Projects} title="Projects" />
      <Route path="organizations" component={Organizations} title="Organizations" />
    </Route>
  </Router>,
  document.getElementById('root')
);
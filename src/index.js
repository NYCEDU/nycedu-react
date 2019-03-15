import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './bootstrapGrid.css';
import './index.css';

import App from './App';
import Home from './home/Home';
import Events from './events/Events';
import Organizations from './organizations/Organizations';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} title="Home" />
      <Route path="events" component={Events} title="Events" />
      <Route path="organizations" component={Organizations} title="Organizations" />
    </Route>
  </Router>,
  document.getElementById('root')
);

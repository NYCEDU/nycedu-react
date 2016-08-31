import React, { Component } from 'react';
import './Home.css';

import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <div className="text-box">
            <h1>#NYCEDU</h1>
            <p>We are a community of teachers, technologists, advocates, and administrators.</p>
            <p>We can do more and do better, together.</p>
            <RaisedButton label="see our community" href="/community" />
          </div>
        </div>
        <div className="section">
          <div className="text-box">
            <h1>Sponsor #NYCEDU</h1>
            <p>We are a community of teachers, technologists, advocates, and administrators.</p>
            <p>We can do more and do better, together.</p>
            <RaisedButton label="sponsorship opportunities" href="/sponsor" />
          </div>
        </div>
        <div className="section">
          <div className="text-box">
            <h1>#NYCEDU Events</h1>
            <p>We are a community of teachers, technologists, advocates, and administrators.</p>
            <p>We can do more and do better, together.</p>
            <RaisedButton label="see events" href="/events" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import './Header.css';
import RaisedButton from 'material-ui/RaisedButton'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div class="text-box">
          <h1>#NYCEDU</h1>
          <p>We are a community of teachers, technologists, advocates, and administrators. We can do more and do better, together.</p>
          <RaisedButton label="Join Us" />
        </div>
      </div>
    );
  }
}

export default Header;
import React, { Component } from 'react';
import './Community.css';
import CommunityFeed from './CommunityFeed';

class Community extends Component {
  render() {
    return (
      <div>
        <h1>Community</h1>
        <p>Here is some subcopy about how great our community is.</p>
        <CommunityFeed />
      </div>
    );
  }
}

export default Community;
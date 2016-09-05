import React, { Component } from 'react';
import './Community.css';
import CommunityFeed from './CommunityFeed';
import SignupForm from '../shared/SignupForm';

import DocumentTitle from 'react-document-title';

class Community extends Component {
  render() {
    return (
      <div className="community-page container">
        <DocumentTitle title="Our community | #NYCEDU" />
        <h1>Community</h1>
        <p>Here is some subcopy about how great our community is.</p>
        <SignupForm />
        <CommunityFeed />
      </div>
    );
  }
}

export default Community;
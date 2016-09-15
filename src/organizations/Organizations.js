import React, { Component } from 'react';
import './Organizations.css';
import OrganizationFeed from './OrganizationFeed';

import DocumentTitle from 'react-document-title';

class Organizations extends Component {
  render() {
    return (
      <div className="organizations-page container">
        <DocumentTitle title="Education Organization in NYC | #NYCEDU" />
        <h1>Organizations</h1>
        <p>Here is some subcopy about how great our community is.</p>
        <OrganizationFeed />
      </div>
    );
  }
}

export default Organizations;
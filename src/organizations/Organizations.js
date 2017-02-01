import React, { Component } from 'react';
import './Organizations.css';
import OrganizationFeed from './OrganizationFeed';
import SignupForm from '../shared/SignupForm';

import DocumentTitle from 'react-document-title';

class Organizations extends Component {
  handleSubscribe = (msg, color) => {
    this.props.handleToast(msg, color);
  }

  render() {
    return (
      <div className="organizations-page container">
        <DocumentTitle title="Education Organization in NYC | #NYCEDU" />
        <h1>Organizations</h1>
        <p>NYC has the greatest density and number of schools, non-profits, and companies in the country. Take a look at just a snapshot of all the education organizations that call NYC home.</p>
        <p>Want to add an organization? Email <a href="mailto:hello@nycedu.org" target="_blank">hello@nycedu.org</a>.</p>
        <OrganizationFeed />
        <SignupForm handleSubmission={this.handleSubscribe}/>
      </div>
    );
  }
}

export default Organizations;
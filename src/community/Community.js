import React, { Component } from 'react';
import './Community.css';
import SignupForm from '../shared/SignupForm';

import DocumentTitle from 'react-document-title';

class Community extends Component {
  render() {
    return (
      <div className="community-page container">
        <DocumentTitle title="Our community | #NYCEDU" />
        <h1>Community</h1>
        <p>If you care about education in NYC, then you are already a member of #NYCEDU! Meet some of your fellow community members.</p>
        <SignupForm handleSubmission={this.props.handleToast} />
      </div>
    );
  }
}

export default Community;
import React, { Component } from 'react';
import './OrganizationCard.css';

export default class OrganizationCard extends Component {

  render() {
    const {organization, toggleExpanded, expandedHandle} = this.props;
    return (
      <div className='organization col-xs-6 col-sm-4 col-lg-4'>
        <img src={'https://twitter.com/' + organization.twitterHandle + '/profile_image?size=original'}
             alt={organization.name + ' logo'} />
        <a target="_blank" href={'http://'+organization.website}>
          <h2>{organization.name}</h2>
        </a>
        <h3>{organization.topic}</h3>
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <p>{organization.targetAudience}</p>
            <span>Target user</span>
          </div>
          <div className="col-sm-4 col-xs-12">
            <p>{organization.network}</p>
            <span>Network</span>
          </div>
          <div className="col-sm-4 col-xs-12">
            <p>{organization.organizationType}</p>
            <span>Legal Structure</span>
          </div>
        </div>
        <a className="btn btn-primary" target="_blank" href={'http://twitter.com/' + organization.twitterHandle}>
          Twitter
        </a>
        {organization.jobWebsite && (
          <a className="btn btn-primary" target="_blank" href={organization.jobWebsite}>
            Jobs Page
          </a>
        )}
        <span onClick={toggleExpanded.bind(null, organization.twitterHandle)}>
          Expand
        </span>
        {expandedHandle === organization.twitterHandle && (
          <div>
            {organization.address && <p>{organization.address}</p>}
            {organization.staticDescription && <p>{organization.staticDescription}</p>}
            <div className="row">
              <div className="col-sm-3 col-xs-6">
                <p>{organization.hq}</p>
                <span>HQ</span>
              </div>
              <div className="col-sm-3 col-xs-6">
                <p>{organization.numberOfEmployees}</p>
                <span>NYC Employees</span>
              </div>
              <div className="col-sm-3 col-xs-6">
                <p>{organization.founded}</p>
                <span>Founded</span>
              </div>
              <div className="col-sm-3 col-xs-6">
                <p>{organization.impactArea}</p>
                <span>Impact Area</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

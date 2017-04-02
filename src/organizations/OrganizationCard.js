import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './OrganizationCard.css';

const OrganizationCard = ({organization, toggleExpanded, expandedHandle}) => {
  return (
    <div className='organization col-xs-12 col-sm-6 col-lg-4'>
      <Card>
        <CardMedia
          style={{
            height: '250px',
            background:'radial-gradient(rgba(0, 0, 0, 0), rgba(104, 159, 56, 0.15)), url(https://twitter.com/' + organization.twitterHandle + '/profile_image?size=original)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="organization-img"
        >
        </CardMedia>
        {organization.websiteUrl ? (
          <a target="_blank" href={'http://'+organization.websiteUrl} className="organization-link">
            <CardTitle
              title={organization.name}
              subtitle={organization.topic}
              titleColor='#8BC34A'
            />
          </a>
        ) : (
          <CardTitle
            title={organization.name}
            subtitle={organization.topic}
          />
        )}
       <CardText>
          <div className="organization-meta">
            {organization.targetAudience &&(
              <div className="organization-meta-item">
                <p>{organization.targetAudience}</p>
                <label>Target user</label>
              </div>
            )}
            {organization.network &&(
              <div className="organization-meta-item">
                <p>{organization.network}</p>
                <label>Network</label>
              </div>
            )}
            {organization.organizationType &&(
              <div className="organization-meta-item">
                <p>{organization.organizationType}</p>
                <label>Legal Structure</label>
              </div>
            )}
          </div>
        </CardText>
          <CardActions
            showExpandableButton={
              organization.hq || organization.numberOfEmployees || organization.founded || organization.impactArea ?
              true
              :
              false}
          >
          <FlatButton
            label="Twitter"
            href={'http://twitter.com/' + organization.twitterHandle}
            target="_blank"
          />
          {organization.jobWebsite && organization.jobWebsite != "N/A" && (
            <FlatButton
              label="Jobs Page"
              href={organization.jobWebsite}
              target="_blank"
            />
          )}
        </CardActions>
         <CardText expandable={true} actAsExpander={true}>
          {organization.address && <p className="organization-address">{organization.address}</p>}
          {organization.staticDescription &&
            <p className="organization-description">{organization.staticDescription}</p>
          }
          <div className="organization-meta">
            {organization.hq && (
              <div className="organization-meta-item">
                <p>{organization.hq}</p>
                <label>HQ</label>
              </div>
            )}
            {organization.numberOfEmployees && (
              <div className="organization-meta-item">
                <p>{organization.numberOfEmployees}</p>
                <label>NYC Employees</label>
              </div>
            )}
            {organization.founded && (
              <div className="organization-meta-item">
                <p>{organization.founded}</p>
                <label>Founded</label>
              </div>
            )}
            {organization.impactArea && (
              <div className="organization-meta-item">
                <p>{organization.impactArea}</p>
                <label>Impact Area</label>
              </div>
            )}
          </div>
        </CardText>
      </Card>
    </div>
  );
}

export default OrganizationCard;

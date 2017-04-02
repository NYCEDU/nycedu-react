import React from 'react';
import './OrganizationFeed.css';
import OrganizationCard from './OrganizationCard';

// TODO: This component is slow to render over 75 cards. We will want to come up with a pagination or infinite scrolling
// solution in the future.
const OrganizationFeed = ({organizations, loading}) => {
  return (
    <div className="organization-list row">
      {loading && (
        <div className="loading">Loading...</div>
      )}
      {organizations && organizations.length > 0 ? organizations.map(
        (organization) => {
          // Filter out rows missing a twitter handle
          if (organization.twitterHandle) {
            return (
              <OrganizationCard
                key={organization.twitterHandle}
                organization={organization}
              />
            )
          }
        }
      )
      : (<p>No organizations found.</p>)
    }
    </div>
  );
}

export default OrganizationFeed;

import React, { Component } from 'react';
import './OrganizationFeed.css';
import OrganizationCard from './OrganizationCard';

export default class OrganizationFeed extends Component {

  state = {
    organizations: [],
    expandedHandle: null,
  }

  componentDidMount() {
    this.getOrganizations();
  }

  getOrganizations = async () => {
    const response = await fetch('https://spreadsheets.google.com/feeds/list/17nmBELMdwT1ScV3j5Vt66wIzSphQhnhhQLdBJdP4oN8/od6/public/values?alt=json');
    const json = await response.json() 
    let orgs = json.feed.entry.map((obj) => {
      return {
        address               : obj['gsx$address']['$t'],
        staticDescription     : obj['gsx$briefdescriptionstatic']['$t'],
        twitterDescription    : obj['gsx$briefdescriptionviatwitter']['$t'],
        name                  : obj['gsx$companyororganization']['$t'],
        numberOfEmployees     : obj['gsx$est.ofemployeesinnyc']['$t'],
        eventsCalendar        : obj['gsx$eventscalendar']['$t'],
        founded               : obj['gsx$founded']['$t'],
        funding               : obj['gsx$funding']['$t'],
        hq                    : obj['gsx$hq']['$t'],
        jobWebsite            : obj['gsx$jobwebsite']['$t'],
        latitude              : obj['gsx$latitude']['$t'],
        longitude             : obj['gsx$longitude']['$t'],
        miscNotes             : obj['gsx$miscnotes']['$t'],
        organizationType      : obj['gsx$organizationtype']['$t'],
        targetAudience        : obj['gsx$targetaudience']['$t'],
        twitterHandle         : obj['gsx$twitterhandle']['$t'],
        websiteUrl            : obj['gsx$websiteurl']['$t']}
      }
    );
    this.setState({organizations: orgs});
  }

  toggleExpanded = (expandedHandle) => {
    this.setState({expandedHandle});
  }

  render() {
    const {organizations, expandedHandle} = this.state;
    return (
      <ul className="organization-list row">
        {organizations.map(
          (organization) => {
            if (organization.twitterHandle) {
              return (
                <OrganizationCard
                  expandedHandle={expandedHandle}
                  key={organization.twitterHandle}
                  organization={organization}
                  toggleExpanded={this.toggleExpanded}
                />
              )
            }
          }
        )}
      </ul>
    );
  }
}

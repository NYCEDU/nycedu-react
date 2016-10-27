import React, { Component } from 'react';
import './OrganizationFeed.css';
import OrganizationCard from './OrganizationCard';

class OrganizationFeed extends Component {

  state = {
    organizations: []
  }

  componentDidMount() {
    fetch('https://spreadsheets.google.com/feeds/list/17nmBELMdwT1ScV3j5Vt66wIzSphQhnhhQLdBJdP4oN8/od6/public/values?alt=json')
    .then( (response) => {
      return response.json() })   
      .then( (json) => {
        let orgs = json.feed.entry.map(function(obj){
          return {
            address               : obj['gsx$address']['$t'],
            staticDescription     : obj['gsx$briefdescriptionstatic']['$t'],
            twitterDescription    : obj['gsx$briefdescriptionviatwitter']['$t'],
            companyororganization : obj['gsx$companyororganization']['$t'],
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
        });
        this.setState({organizations: orgs});
      });
  }

  render() {
    return (
      <ul className="organization-list row">
        {this.state.organizations.map(
          function(entry, i){
            return <OrganizationCard
                      key={i}
                      image={'https://twitter.com/'+entry.twitterHandle+'/profile_image?size=original'}
                      twitterHandle={entry.twitterHandle}
                      name={entry.companyororganization}
                      website={entry.websiteUrl}
                      type={entry.organizationType} />
          }
        )}
      </ul>
    );
  }
}

export default OrganizationFeed;
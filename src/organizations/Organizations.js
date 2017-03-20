import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import _ from 'lodash';

import KeywordSearchField from './KeywordSearchField';
import OrganizationFeed from './OrganizationFeed';
import OrganizationFilters from './OrganizationFilters';
import SignupForm from '../shared/SignupForm';

import './Organizations.css';

const BASE_FILTER = {network: {}, organizationType: {}};

class Organizations extends Component {
  state = {
    filter: BASE_FILTER,
    organizations: [],
    queryText: '',
    visibleOrganizations: [],
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
        impactArea            : obj['gsx$impactarea']['$t'],
        network               : obj['gsx$networkorientation']['$t'],
        topic                 : obj['gsx$topic']['$t'],
        websiteUrl            : obj['gsx$websiteurl']['$t']}
      }
    );
    // Need an unfiltered list of organizations to pass to the search
    this.setState({organizations: orgs, visibleOrganizations: orgs});
  }

  updateQueryText = (updatedOrganizations, queryText) => {
    this.setState({
      visibleOrganizations: updatedOrganizations,
      queryText: queryText
    });
  }

  setSearch = (queryText) => {
    this.setState({queryText: queryText.toLowerCase()})
  }

  handleSetFilter = (f) => {
    let {filter} = this.state;
    filter[f[0]][f[1]] = !filter[f[0]][f[1]];
    this.setState({filter});
  }

  handleSubscribe = (msg, color) => {
    this.props.handleToast(msg, color);
  }

  render() {
    const {organizations, visibleOrganizations, queryText, filter} = this.state;
    const filteredOrganizations = _.isEqual(BASE_FILTER, filter) ? visibleOrganizations : _.filter(visibleOrganizations, filter);
    return (
      <div className="organizations-page container">
        <DocumentTitle title="Education Organization in NYC | #NYCEDU" />
        <h1>Organizations</h1>
        <p>NYC has the greatest density and number of schools, non-profits, and companies in the country. Take a look at just a snapshot of all the education organizations that call NYC home.</p>
        <p>Want to add an organization? Email <a href="mailto:hello@nycedu.org" target="_blank">hello@nycedu.org</a>.</p>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <KeywordSearchField
              organizations={organizations}
              updateQueryText={this.updateQueryText}
              queryText={queryText}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <OrganizationFilters filter={filter} handleSetFilter={this.handleSetFilter} />
          </div>
        </div>
        <OrganizationFeed organizations={filteredOrganizations}/>
        <SignupForm handleSubmission={this.handleSubscribe}/>
      </div>
    );
  }
}

export default Organizations;
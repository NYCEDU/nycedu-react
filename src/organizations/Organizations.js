import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import _ from 'lodash';

import KeywordSearchField from './KeywordSearchField';
import OrganizationFeed from './OrganizationFeed';
import OrganizationFilters from './OrganizationFilters';
import SignupForm from '../shared/SignupForm';

import './Organizations.css';

const BASE_FILTER = {network: {}, organizationType: {}, hq: {}, targetAudience: {}};

class Organizations extends Component {
  state = {
    filter: _.cloneDeep(BASE_FILTER),
    loading: true,
    organizations: [],
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
    this.setState({organizations: orgs, visibleOrganizations: orgs, loading: false});
  }

  updateQueryText = (updatedOrganizations, queryText) => {
    this.setState({
      visibleOrganizations: updatedOrganizations
    });
  }

  handleSetFilter = (f) => {
    let {filter} = this.state;
    if (filter[f[0]][f[1]] === true) {
      delete filter[f[0]][f[1]];
    } else {
      filter[f[0]][f[1]] = true;
    }
    this.setState({filter});
  }

  filterOrganizations = (organizations, filters) => {
    let filteredOrganizations = organizations;
    _.each(filters, (values, filter) => {
      const keys = Object.keys(values).filter((k) => {return [k];})
      // Likely a better way to do this
      if (filter === 'hq') {
        if (keys.length === 2) {
          return;
        }
        if (values['NYC']) {
          filteredOrganizations = _.filter(filteredOrganizations, (o) => {
            return o.hq === 'NYC'
          });
          return;
        }
        if (values['NOT-NYC']) {
          filteredOrganizations = _.filter(filteredOrganizations, (o) => {
            return o.hq !== 'NYC'
          });
          return; 
        }
      }
      if (filteredOrganizations.length > 0 && keys && keys.length > 0) {
        filteredOrganizations = _.filter(filteredOrganizations,
          (organization) => {
            return _.includes(keys, organization[filter]);
        })
      }
    });
    return filteredOrganizations;
  }

  handleSubscribe = (msg, color) => {
    this.props.handleToast(msg, color);
  }

  render() {
    const {organizations, visibleOrganizations, queryText, filter, loading} = this.state;
    const activeFilter = _.filter(filter, (v, k) => {
      return _.some(v, (v) => {return v === true;});
    })
    const filteredOrganizations = activeFilter.length === 0 ? visibleOrganizations : this.filterOrganizations(visibleOrganizations, filter);
    return (
      <div className="organizations-page container">
        <DocumentTitle title="Education Organization in NYC | #NYCEDU" />
        <h1>Organizations</h1>
        <p>NYC has the greatest density and number of schools, non-profits, and companies in the country. Take a look at just a snapshot of all the education organizations that call NYC home.</p>
        <p className="text-center">Want to add an organization? Email <a href="mailto:hello@nycedu.org" target="_blank">hello@nycedu.org</a>.</p>
        <div className="row organizations-options">
          <div className="col-md-6 col-xs-12">
            <KeywordSearchField
              organizations={organizations}
              updateQueryText={this.updateQueryText}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <OrganizationFilters filter={filter} handleSetFilter={this.handleSetFilter} />
          </div>
        </div>
        <OrganizationFeed organizations={filteredOrganizations} loading={loading}/>
        <SignupForm handleSubmission={this.handleSubscribe}/>
      </div>
    );
  }
}

export default Organizations;
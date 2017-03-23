import React, { Component } from 'react';
import './OrganizationFilters.css';

export default class OrganizationCard extends Component {
  render() {
    const {filter, handleSetFilter} = this.props;
    return (
      <div className="organization-filters">
        <label>Filters</label>
        <div className='button-bar'>
          <div className={filter.network['Hub'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['network', 'Hub'])}>Hub</div>
          <div className={filter.network['Non-hub'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['network', 'Non-hub'])}>Non-Hub</div>
        </div>
        <div className='button-bar'>
          <div className={filter.hq['NYC'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['hq', 'NYC'])}>NYC Based</div>
          <div className={filter.hq['NOT-NYC'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['hq', 'NOT-NYC'])}>Based Elsewhere</div>
        </div>
        <div className='button-bar'>
          <div className={filter.targetAudience['K12'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['targetAudience', 'K12'])}>K12 Student</div>
          <div className={filter.targetAudience['Teacher'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['targetAudience', 'Teacher'])}>Teacher</div>
          <div className={filter.targetAudience['School'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['targetAudience', 'School'])}>School</div>
          <div className={filter.targetAudience['Entrepreneur'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['targetAudience', 'Entrepreneur'])}>Entrepreneur</div>
        </div>
        <div className='button-bar'>
          <div className={filter.organizationType['for-profit'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['organizationType', 'for-profit'])}>For profit</div>
          <div className={filter.organizationType['b-corporation'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['organizationType', 'b-corporation'])}>B-corporation</div>
          <div className={filter.organizationType['nonprofit'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['organizationType', 'nonprofit'])}>Non-profit</div>
          <div className={filter.organizationType['government'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['organizationType', 'government'])}>Government</div>
        </div>
      </div>
    );
  }
}

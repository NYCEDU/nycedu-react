import React, { Component } from 'react';
import './OrganizationFilters.css';

export default class OrganizationCard extends Component {
  // <span className={filter.targetAudience['k12-student'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['targetAudience', 'k12-student'])}>K12 Student</span>
  // <span className={filter.targetAudience['teacher'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['targetAudience', 'teacher'])}>Teacher</span>
  // <span className={filter.targetAudience['school'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['targetAudience', 'school'])}>School</span>
  // <span className={filter.targetAudience['entrepreneur'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['targetAudience', 'entrepreneur'])}>Entrepreneur</span>

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
          <div className=''>NYC Based</div>
          <div className=''>Based Elsewhere</div>
        </div>
        <div className='button-bar'>
          <div className=''>K12 Student</div>
          <div className=''>Teacher</div>
          <div className=''>School</div>
          <div className=''>Entrepreneur</div>
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

import React, { Component } from 'react';
import './OrganizationFilters.css';

export default class OrganizationCard extends Component {

  render() {
    const {filter, handleSetFilter} = this.props;
    return (
      <div>
        <span>Filters</span>
        <div>
          <span className={filter.network['Hub'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['network', 'Hub'])}>Hub</span>
          <span className={filter.network['Non-hub'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['network', 'Non-hub'])}>Non-Hub</span>
        </div>
        <div>
          <span className={filter.organizationType['for-profit'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['organizationType', 'for-profit'])}>For profit</span>
          <span className={filter.organizationType['b-corporation'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['organizationType', 'b-corporation'])}>B-corporation</span>
          <span className={filter.organizationType['nonprofit'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['organizationType', 'nonprofit'])}>Non-profit</span>
          <span className={filter.organizationType['government'] ? 'selected' : ''} onClick={handleSetFilter.bind(null, ['organizationType', 'government'])}>Government</span>
        </div>
      </div>
    );
  }
}

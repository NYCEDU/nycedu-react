import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';

const KEYS_TO_FILTER = ['name', 'address', 'staticDescription'];

export default class SearchField extends Component {

  searchUpdated = (term) => {
    const {organizations, updateQueryText, queryText} = this.props;
    const updatedOrganizations = organizations.filter(createFilter(term, KEYS_TO_FILTER));
    updateQueryText(updatedOrganizations, term);
  }

  render() {
    const {queryText} = this.props;
    return (
      <div className="col-md-8 offset-md-2">
        <SearchInput
          className="search-input"
          value={queryText}
          type="search"
          throttle={0}
          fuzzy={true}
          onChange={this.searchUpdated}
        />
      </div>
    );
  }
}
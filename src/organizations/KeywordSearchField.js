import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import TextField from 'material-ui/TextField';

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
      <div>
        <SearchInput
          className="search-input"
          value={queryText}
          type="search"
          throttle={0}
          fuzzy={true}
          onChange={this.searchUpdated}
        />
        <TextField
          hintText="e.g. NYCEDU"
          floatingLabelText="Search"
          fullWidth={true}
          floatingLabelFixed={true}
        />
      </div>
    );
  }
}
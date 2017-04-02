import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class SearchField extends Component {

  state = {
    queryText: ''
  }

  searchUpdated = (e) => {
    const target = e.target;
    const term = e.target.value;
    this.setState({queryText: term}, () => {
      if (this._throttleTimeout) {
        clearTimeout(this._throttleTimeout)
      }
      this._throttleTimeout = setTimeout(() => {
        this.handleChange(term)}, 250)
    });
  }

  handleChange = (term) => {
    const {organizations, updateQueryText} = this.props;
    const regex = new RegExp(term, 'i')
    const updatedOrganizations = term.length > 0 ? organizations.filter((o) => {
      return o.name.search(regex) !== -1 ||
             o.staticDescription.search(regex) !== -1 ||
             o.address.search(regex) !== -1 ||
             o.topic.search(regex) !== -1
    }) : organizations;
    updateQueryText(updatedOrganizations, term);
    
  }

  render() {
    const {queryText} = this.state;
    return (
      <div>
        <TextField
          hintText="e.g. NYCEDU"
          floatingLabelText="Search"
          fullWidth={true}
          floatingLabelFixed={true}
          onChange={this.searchUpdated}
          value={queryText}
        />
      </div>
    );
  }
}
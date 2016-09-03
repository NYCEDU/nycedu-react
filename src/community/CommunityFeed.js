import React, { Component } from 'react';
import './CommunityFeed.css';

class CommunityFeed extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    fetch('https://spreadsheets.google.com/feeds/list/1O-PXjyfgQg1kDjUhwajgiyAro-dolYYbPR9yfE3Mznc/od6/public/values?alt=json')
    .then( (response) => {
      return response.json() })   
      .then( (json) => {
        this.setState({data: json.feed.entry});
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map(
          function(entry, i){
            return <div className='organization' key={i}>
              <img src={'https://twitter.com/'+entry.gsx$twitterhandle.$t+'/profile_image?size=bigger'}/>
              <p>{entry.gsx$companyororganization.$t}</p>
              <p>{entry.gsx$websiteurl.$t}</p>
              <p>{entry.gsx$organizationtype.$t}</p>
            </div>;
          }
        )}
      </ul>
    );
  }
}

export default CommunityFeed;
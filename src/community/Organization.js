import React, { Component } from 'react';
import './Organization.css';

class Organization extends Component {

  state = {
    data: []
  }

  componentDidMount() {
  }

  render() {
    return (<div className='organization'>
              <img src={this.props.image}
                   alt={this.props.name + ' logo'} />
              <h2><a href={this.props.website}>{this.props.name}</a></h2>
            </div>
    );
  }
}

export default Organization;
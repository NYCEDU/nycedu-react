import React, { Component } from 'react';
import './Organization.css';

class Organization extends Component {

  state = {
    data: []
  }

  componentDidMount() {
  }

  render() {
    return (<div className='organization col-xs-6 col-sm-4 col-lg-3'>
              <img src={this.props.image}
                   alt={this.props.name + ' logo'} />
              <h2><a href={this.props.website}>{this.props.name}</a></h2>
            </div>
    );
  }
}

export default Organization;
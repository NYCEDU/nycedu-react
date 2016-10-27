import React, { Component } from 'react';
import './OrganizationCard.css';

class Organization extends Component {

  render() {
    return (<div className='organization col-xs-6 col-sm-4 col-lg-3'>
              <a target="_blank" href={'http://'+this.props.website}>
                <img src={this.props.image}
                     alt={this.props.name + ' logo'} />
                <h2>{this.props.name}</h2>
              </a>
            </div>
    );
  }
}

export default Organization;
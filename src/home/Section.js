import React, { Component } from 'react';
import './Section.css';


class Section extends Component {

  render() {
    let className = 'section ' + this.props.className;
    
    return (
      <div className={className}
           style={{zIndex          : this.props.zIndex,
                  backgroundColor : this.props.backgroundColor,
                  position        : this.props.position}}>
        <div className="container">          
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;
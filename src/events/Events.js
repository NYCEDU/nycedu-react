import React, { Component } from 'react';
import './Events.css';
import CalendarEvents from './CalendarEvents';
import SignupForm from '../shared/SignupForm';

import DocumentTitle from 'react-document-title';

class Events extends Component {

  handleSubscribe = (msg, color) => {
    this.props.handleToast(msg, color);
  }

  render() {
    return (
      <div className="events-page">
        <div className="container">
          <DocumentTitle title="Events | #NYCEDU" />
          <h1>Events</h1>
          <p>What are the events you need to know about happening in and around the #NYCEDU community? Check out the calendar below to find out!</p>
          <CalendarEvents calendarID="eventsnycedu@gmail.com"
                          apiKey="AIzaSyA6QvZ7B1dM3fwW93VJz761rHAC4PTyxB4" />
          <SignupForm handleSubmission={this.handleSubscribe}/>
        </div>
      </div>
    );
  }
}

export default Events;
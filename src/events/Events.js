import React, { Component } from 'react';
import './Events.css';
import CalendarEvents from './CalendarEvents';

class Events extends Component {
  render() {
    return (
      <div className="events-page">
        <h1>Events</h1>
        <p>What are the events you need to know about happening in and around the #NYCEDU community? Check out the calendar below to find out!</p>
        <CalendarEvents calendarID="d3mtgig0vt45995r1jhf5m9f5g%40group.calendar.google.com"
                        apiKey="AIzaSyA6QvZ7B1dM3fwW93VJz761rHAC4PTyxB4" />
      </div>
    );
  }
}

export default Events;
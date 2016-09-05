import React, { Component } from 'react';
import './CalendarEvents.css';
import CalendarEvent from './CalendarEvent';

class CalendarEvents extends Component {

  state = {
    events: []
  }
  
  componentDidMount() {
    fetch('https://www.googleapis.com/calendar/v3/calendars/' + this.props.calendarID + '/events?key=' + this.props.apiKey)
    .then( (response) => {
      return response.json() })   
      .then( (json) => {
        this.setState({events: json.items});
      });
  }

  render() {
    return(
      <div className="events">
        <div>
          <h2>This month</h2>
        </div>
        <dl className="events-list row"> 
          {this.state.events.map(
            function (event) {
              return <CalendarEvent
                        key={event.id}
                        event={event} />
            }
          )}
        </dl>
      </div>
    )
  }
}

export default CalendarEvents;
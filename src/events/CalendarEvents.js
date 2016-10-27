import React, { Component } from 'react';
import './CalendarEvents.css';
import CalendarEvent from './CalendarEvent';
import _ from 'lodash';

class CalendarEvents extends Component {

  state = {
    events: []
  }
  
  componentDidMount() {
    const now = new Date().toISOString();
    fetch('https://www.googleapis.com/calendar/v3/calendars/' + this.props.calendarID + '/events?timeMin='+now+'&key=' + this.props.apiKey)
    .then( (response) => {
      return response.json() })   
      .then( (json) => {
        const events = _.orderBy(json.items, 'start[dateTime]','asc')
        this.setState({events: events});
      });
  }

  render() {
    return(
      <div className="events">
        <div>
          <h2>This month</h2>
        </div>
        <dl className="events-list"> 
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
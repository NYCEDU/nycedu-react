import React, { Component } from 'react';
import moment from 'moment';
import './CalendarEvent.css';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class CalendarEvent extends Component {
  
  render() {
    var event = this.props.event;
    var day = moment(event.start.dateTime).format("ddd, MMM Do");
    var start = moment(event.start.dateTime).format("h:mma");
    var end = moment(event.end.dateTime).format("h:mma");

    return(
      <Card className="event">
        <CardHeader className="event-header"
                    title={day}
                    subtitle={start + ' - ' + end} />
        <CardText className="event-body">
          <h3>{event.summary}</h3>
          <p>{event.description}</p>
          <div className="event-location">
            {event.location}
          </div>
        </CardText>
        <CardActions>
          <RaisedButton label="learn more" target="_blank" href={event.htmlLink} />
        </CardActions>
      </Card>
    )
  }
}

export default CalendarEvent;


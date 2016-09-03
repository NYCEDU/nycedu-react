import React, { Component } from 'react';
import moment from 'moment';
import md5 from 'crypto-js/md5';
import './CalendarEvent.css';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class CalendarEvent extends Component {

  render() {
    var event = this.props.event;
    var day = moment(event.start.dateTime).format("ddd, MMM Do");
    var start = moment(event.start.dateTime).format("h:mma");
    var end = moment(event.end.dateTime).format("h:mma");
    var emailHash = md5(this.props.event.organizer.email).toString();

    return(
      <Card className="event">
        <CardHeader className="event-header"
                    title={day}
                    subtitle={start + ' - ' + end}
                    avatar={'https://www.gravatar.com/avatar/'+emailHash}/>
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


import React, { Component } from 'react';
import moment from 'moment';
import md5 from 'crypto-js/md5';
import './CalendarEvent.css';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class CalendarEvent extends Component {

  render() {

    const event = this.props.event;
    const day = moment(event.start.dateTime).format("ddd, MMM Do");
    const start = moment(event.start.dateTime).format("h:mma");
    const end = moment(event.end.dateTime).format("h:mma");
    const emailHash = md5(this.props.event.organizer.email).toString();

    return(
      <div className=" col-sm-6 col-md-4">
        <Card className="event">
          <CardHeader className="event-header"
                      title={day}
                      subtitle={start + ' - ' + end}
                      avatar={'https://www.gravatar.com/avatar/'+emailHash}/>
          <CardText className="event-body">
            <h3>{event.summary}</h3>
            <p className="event-description">{event.description}</p>
            <div className="event-location">
              {event.location}
            </div>
            <span>Organizer: <a href={'mailto:'+event.organizer.email}>
              {event.organizer.displayName}</a>
            </span>
          </CardText>
          <CardActions>
            <RaisedButton label="learn more" target="_blank" href={event.htmlLink} />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default CalendarEvent;


import React, { Component } from 'react';
import moment from 'moment';
import md5 from 'crypto-js/md5';
import './CalendarEvent.css';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class CalendarEvent extends Component {

  render() {

    const event = this.props.event;
    const day = moment(event.start.dateTime).format("ddd, MMM Do");
    const start = moment(event.start.dateTime).format("h:mma");
    const end = moment(event.end.dateTime).format("h:mma");
    const emailHash = md5(this.props.event.organizer.email).toString();

    return(
      <div className="row">
        <Card className="event col-md-12">
          <CardHeader className="event-header"
                      title={event.summary}
                      subtitle={day + ' ' + start + ' - ' + end}
                      avatar={'https://www.gravatar.com/avatar/'+emailHash}
                      actAsExpander={true}
                      showExpandableButton={true} />
          <CardText className="event-body" expandable={true}>
            <div className="event-location">
              <span>Where:</span> {event.location}
            </div>
            <p className="event-description">{event.description}</p>
            <p>Organizer: <a href={'mailto:'+event.organizer.email}>
              {event.organizer.displayName}</a>
            </p>
            <RaisedButton label="learn more" target="_blank" href={event.htmlLink} />
          </CardText>
        </Card>
      </div>
    )
  }
}

export default CalendarEvent;


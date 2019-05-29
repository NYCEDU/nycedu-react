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
    let link =  event.htmlLink;
    const isLink = /(https?:\/\/[^\s]+)/
    let description
    if (event.description) {
      let lines = event.description.split('\n');

      if (lines[lines.length - 1].match(isLink)) {
        link = lines[lines.length - 1].match(isLink)[0];
        lines.splice(-1,1); //Remove the link from the description and make it a button
      }

      description = lines.map((line, i) => {
        return <p key={i}>{line}</p>;
      });
    }


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
            {
              event.location &&
              <div className="event-location">
                <span>Where:</span> {event.location}
              </div>
            }
            {
              description &&
              <p className="event-description">{description}</p>
            }
            {
              event.organizer.email && event.organizer.displayName &&
              <p>Organizer: <a href={'mailto:'+event.organizer.email}>
                {event.organizer.displayName}</a>
              </p>
            }
            <RaisedButton label="learn more" primary={true} target="_blank" href={link} />
          </CardText>
        </Card>
      </div>
    )
  }
}

export default CalendarEvent;

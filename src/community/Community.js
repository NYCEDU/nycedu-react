import React, { Component } from 'react';
import './Community.css';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SignupForm from '../shared/SignupForm'
import sky from './sky.svg';
import middleLandscape from './middle_landscape.svg';
import deborah from './deborah.jpg';
import eugene from './eugene.png';
import sean from './sean.png';

import DocumentTitle from 'react-document-title';

export default class Community extends Component {
  render() {
    const people = [
      {
        name: "Deborah Chang",
        imageUrl: deborah,
        buildCommunity: "I founded #NYCEDU to connect everyone with everyone in NYC education.",
        getInvolved: <p><a href="#SignupForm" name="SignupForm">Subscribe</a> to the newsletter to learn more.</p>
      },
      {
        name: "Eugene Leventhal",
        imageUrl: eugene,
        buildCommunity: "I started the Bronx Education Meetup group to help connect those involved in education in the Bronx. I’m also working on EduDAO, a blockchain educational funding project.",
        getInvolved: <p>Sign up for the <a target="_blank" href="https://www.meetup.com/Bronx-Education-Meetup/">meetup</a> or email me at <a href="mailto:eugene.leventhal@gmail.com">eugene.leventhal@gmail.com</a>.</p>
      },
      {
        name: "Sean Perkins",
        imageUrl: sean,
        buildCommunity: "I am working to ensure the technology we create for NYCEDU stays open and maintainable by the community. I also like to help folks that are new to software development get started in the field.",
        getInvolved: <p>Check out the #NYCEDU <a target="_blank" href="https://github.com/NYCEDU/">Github repo</a> to see whats being created by our community. Interact with others in the <a target="_blank" href="https://nycedu.slack.com/messages/we_are_developers/">#we_are_developers</a> channel in Slack.</p>
      },
    ];
    const communityMembers = people.map((person) => {
        return (
          <Card className="card">
            <CardMedia>
              <img src={person.imageUrl} />
            </CardMedia>
            <CardTitle title={person.name} />
            <CardText>
              <section>
                <h3>How you’re building community in NYC education:</h3>
                <p>{person.buildCommunity}</p>
              </section>
              <section>
                <h3>How to get involved:</h3>
                {person.getInvolved}
              </section>
            </CardText>
          </Card>
        )
      }
    );
    return (
      <div className="community-page container">
        <DocumentTitle title="Our community | #NYCEDU" />
        <object id="sky-background" className="community-backgrounds" type="image/svg+xml" data={sky}>Your browser does not support svgs.</object>
        <h1>Community</h1>
        <p>If you care about education in NYC, then you are already a member of #NYCEDU! Meet some of your fellow community members.</p>
        <div className="member-container">
          {communityMembers}
        </div>
        <object id="middle-background" className="community-backgrounds" type="image/svg+xml" data={middleLandscape}>Your browser does not support svgs.</object>
        <Card style={{padding: "25px", margin: "0 auto 100px", maxWidth: "800px"}}>
          <SignupForm id="SignupForm" handleSubmission={this.props.handleToast} />
        </Card>
      </div>
    );
  }
}

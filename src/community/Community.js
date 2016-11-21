import React, { Component } from 'react';
import './Community.css';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SignupForm from '../shared/SignupForm';
import deborah from './deborah.jpg';
import eugene from './eugene.png';
import sean from './sean.png';

import DocumentTitle from 'react-document-title';

class Community extends Component {
  render() {
    return (
      <div className="community-page container">
        <DocumentTitle title="Our community | #NYCEDU" />
        <h1>Community</h1>
        <p>If you care about education in NYC, then you are already a member of #NYCEDU! Meet some of your fellow community members.</p>
        <div className="member-container">
          <Card className="card">
            <CardMedia>
              <img src={deborah} />
            </CardMedia>
            <CardTitle title="Deborah Chang" />
            <CardText>
              <section>
                <h3>How you’re building community in NYC education:</h3>
                <p>I founded #NYCEDU to connect everyone with everyone in NYC education.</p>
              </section>
              <section>
                <h3>How to get involved:</h3>
                <p>Subscribe to the newsletter to learn more.</p>
              </section>
            </CardText>
          </Card>
          <Card className="card">
            <CardMedia>
              <img src={eugene} />
            </CardMedia>
            <CardTitle title="Eugene Leventhal" />
            <CardText>
              <section>
                <h3>How you’re building community in NYC education:</h3>
                <p>I started the Bronx Education Meetup group to help connect those involved in education in the Bronx. I’m also working on EduDAO, a blockchain educational funding project.</p>
              </section>
              <section>
                <h3>How to get involved:</h3>
                <p>Sign up to the <a href="https://www.meetup.com/Bronx-Education-Meetup/">meetup</a> or email me at <a href="mailto:eugene.leventhal@gmail.com">eugene.leventhal@gmail.com</a>. </p>
              </section>
            </CardText>
          </Card>
          <Card className="card">
            <CardMedia>
              <img src={sean} />
            </CardMedia>
            <CardTitle title="Sean Perkins" />
            <CardText>
              <section>
                <h3>How you’re building community in NYC education:</h3>
                <p>I founded #NYCEDU to connect everyone with everyone in NYC education.</p>
              </section>
              <section>
                <h3>How to get involved:</h3>
                <p>Subscribe to the newsletter to learn more.</p>
              </section>
            </CardText>
          </Card>
        </div>
        <Card style={{padding: "25px"}}>
          <SignupForm handleSubmission={this.props.handleToast} />
        </Card>
      </div>
    );
  }
}

export default Community;
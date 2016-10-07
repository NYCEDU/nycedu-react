import React, { Component } from 'react';
import './Home.css';
import Section from './Section';
import communityIllustration from './community-illustration.svg';
import eventIllustration from './events-illustration.svg';
import project1 from './project1.png';

import DocumentTitle from 'react-document-title';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Home extends Component {

  state = {
    pos2: 'fixed',
    pos3: 'fixed',
    pos4: 'fixed'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.setState({pos2: window.scrollY >= window.innerHeight ? 'relative':'fixed'});
    this.setState({pos3: (window.scrollY >= (2*window.innerHeight)) ? 'relative':'fixed'});
    this.setState({pos4: (window.scrollY >= (3*window.innerHeight)) ? 'relative':'fixed'});
  }

  render() {
    return (
      <div style={{height:'400vh'}}>
        <DocumentTitle title="Welcome to your community | #NYCEDU" />
        <Section className="community" zIndex={4} backgroundColor="#8bc34a" position='relative'>
          <object id="community-background" type="image/svg+xml" data={communityIllustration}>Your browser does not support svgs.</object>
          <h1>#NYCEDU</h1>
          <p>We are a community of teachers, technologists, advocates, and administrators.</p>
          <p>We can do more and do better, together.</p>
          <RaisedButton label="see our community" className="see-our" href="/community" />
        </Section>
        <Section className="projects" zIndex={3} backgroundColor='#fff' position={this.state.pos2}>
          <h1>Be a part of #NYCEDU</h1>
          <p>We are a community of teachers, technologists, advocates, and administrators.</p>
          <p>We can do more and do better, together.</p>
          <div className="row">
            <div className="col-sm-4">
              <Paper>
                <img className="project-thumbnail" src={project1} />
                <h2>Hour of Code</h2>
                <p>Code Brooklyn</p>
                <p>Information about hour of code</p>
              </Paper>
            </div>
            <div className="col-sm-4">
              <Paper>
                <img className="project-thumbnail" src={project1} />
                <h2>Startup Weekend Edu</h2>
                <p>Code Brooklyn</p>
                <p>Information about hour of code</p>
              </Paper>
            </div>
            <div className="col-sm-4">
              <Paper>
                <img className="project-thumbnail" src={project1} />
                <h2>SXSWedu Ultimate List</h2>
                <p>Code Brooklyn</p>
                <p>Information about hour of code</p>
              </Paper>
            </div>
          </div>
          <RaisedButton label="see our projects" className="see-our" primary={true} href="/projects" />
        </Section>
        <Section className="events" zIndex={2} backgroundColor='#607d8b' position={this.state.pos3}>
          <object id="event-background" type="image/svg+xml" data={eventIllustration}>Your browser does not support svgs.</object>
          <h1>#NYCEDU Events</h1>
          <p>We are a community of teachers, technologists, advocates, and administrators.</p>
          <p>We can do more and do better, together.</p>
          <RaisedButton label="see our events" className="see-our" href="/events" />
        </Section>
        <Section className="organizations" zIndex={1} backgroundColor='#fff' position={this.state.pos4}>
          <h1>#NYCEDU Organizations</h1>
          <p>We are a community of teachers, technologists, advocates, and administrators.</p>
          <p>We can do more and do better, together.</p>
          <RaisedButton label="see our organizations" className="see-our" href="/organizations" />
        </Section>
      </div>
    );
  }
}

export default Home;
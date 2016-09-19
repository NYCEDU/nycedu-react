import React, { Component } from 'react';
import './Home.css';
import Section from './Section';
import community from './community.svg';

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
          <object id="community-background" type="image/svg+xml" data={community}>Your browser does not support svgs.</object>
          <h1>#NYCEDU</h1>
          <p>We are a community of teachers, technologists, advocates, and administrators.</p>
          <p>We can do more and do better, together.</p>
          <RaisedButton label="see our community" href="/community" />
        </Section>
        <Section className="projects" zIndex={3} backgroundColor='#fff' position={this.state.pos2}>
          <h1>Be a part of #NYCEDU</h1>
          <p>We are a community of teachers, technologists, advocates, and administrators.</p>
          <p>We can do more and do better, together.</p>
          <RaisedButton label="see our projects" href="/projects" />
          <div className="row">
            <div className="col-md-4">
              <Paper>
                <h2>Hour of Code</h2>
                <h3>Code Brooklyn</h3>
                <p>Information about hour of code</p>
              </Paper>
            </div>
            <div className="col-md-4">
              <Paper>
                <h2>Startup Weekend Edu</h2>
                <h3>Code Brooklyn</h3>
                <p>Information about hour of code</p>
              </Paper>
            </div>
            <div className="col-md-4">
              <Paper>
                <h2>SXSWedu Ultimate List</h2>
                <h3>Code Brooklyn</h3>
                <p>Information about hour of code</p>
              </Paper>
            </div>
          </div>
        </Section>
        <Section className="events" zIndex={2} backgroundColor='#607d8b' position={this.state.pos3}>
          <h1>#NYCEDU Events</h1>
          <p>We are a community of teachers, technologists, advocates, and administrators.</p>
          <p>We can do more and do better, together.</p>
          <RaisedButton label="see our events" href="/events" />
        </Section>
        <Section className="organizations" zIndex={1} backgroundColor='#fff' position={this.state.pos4}>
          <h1>#NYCEDU Organizations</h1>
          <p>We are a community of teachers, technologists, advocates, and administrators.</p>
          <p>We can do more and do better, together.</p>
          <RaisedButton label="see our organizations" href="/organizations" />
        </Section>
      </div>
    );
  }
}

export default Home;
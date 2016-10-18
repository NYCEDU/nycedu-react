import React, { Component } from 'react';
import './Home.css';
import Section from './Section';
import communityIllustration from './community-illustration.svg';
import eventIllustration from './events-illustration.svg';
import organizationsIllustration from './organizations-illustration.svg';
import project1 from './project1.png';

import DocumentTitle from 'react-document-title';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Home extends Component {

  state = {
    pos2: 'fixed',
    pos3: 'fixed',
    pos4: 'fixed',
    intervalId: null
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    
    const cb = document.getElementById('community-background');
    cb.addEventListener('load', this.setLightingInterval);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.state.intervalId);

  }

  handleScroll = () => {
    this.setState({pos2: window.scrollY >= window.innerHeight ? 'relative':'fixed'});
    this.setState({pos3: (window.scrollY >= (2*window.innerHeight)) ? 'relative':'fixed'});
    this.setState({pos4: (window.scrollY >= (3*window.innerHeight)) ? 'relative':'fixed'});
  }

  setLightingInterval = () => {
    const communityDoc = document.getElementById('community-background').contentDocument;
    const ew = communityDoc.querySelectorAll('#empire_windows, #building1_windows, #building_4windows');
    let windows = [];
    for (var i = 0, len = ew.length; i < len; i++) {
      let temp = [].slice.call(ew[i].children);
      windows = windows.concat(temp);
    }
    
    let turnOnLight = (ele) => {
      if (ele.style.fill === 'yellow'){
        ele.style.fill = '';
      } else {
        ele.style.fill='yellow';
      }
    }

    let grabRandom = (items) => {
      return items[Math.floor(Math.random()*items.length)];
    }

    let intervalId = setInterval(function() {
      turnOnLight(grabRandom(windows));
    }, 200);

    this.setState({intervalId: intervalId});
  }

  render() {

    return (
      <div style={{height:'400vh'}}>
        <DocumentTitle title="Welcome to your community | #NYCEDU" />
        <Section className="community" zIndex={4} backgroundColor="#8bc34a" position='relative'>
          <object id="community-background" className="home-backgrounds" type="image/svg+xml" data={communityIllustration}>Your browser does not support svgs.</object>
          <div className="text-box">
            <h1>#NYCEDU</h1>
            <p>We are a community of teachers, technologists, advocates, and administrators.</p>
            <p>We can do more and do better, together.</p>
          </div>
          <RaisedButton label="see our community" className="see-our" href="/community" />
        </Section>
        <Section className="projects" zIndex={3} backgroundColor='#fff' position={this.state.pos2}>
          <div className="text-box">
            <h1>Be a part of #NYCEDU</h1>
            <p>We are a community of teachers, technologists, advocates, and administrators.</p>
            <p>We can do more and do better, together.</p>
            <div className="row">
              <div className="col-sm-4">
                <Paper>
                  <img className="project-thumbnail" role="presentation" src={project1} />
                  <h2>Hour of Code</h2>
                  <p>Code Brooklyn</p>
                  <p>Information about hour of code</p>
                </Paper>
              </div>
              <div className="col-sm-4">
                <Paper>
                  <img className="project-thumbnail" role="presentation" src={project1} />
                  <h2>Startup Weekend Edu</h2>
                  <p>Code Brooklyn</p>
                  <p>Information about hour of code</p>
                </Paper>
              </div>
              <div className="col-sm-4">
                <Paper>
                  <img className="project-thumbnail" role="presentation" src={project1} />
                  <h2>SXSWedu Ultimate List</h2>
                  <p>Code Brooklyn</p>
                  <p>Information about hour of code</p>
                </Paper>
              </div>
            </div>
          </div>
          <RaisedButton label="see our projects" className="see-our" primary={true} href="/projects" />
        </Section>
        <Section className="events" zIndex={2} backgroundColor='#607d8b' position={this.state.pos3}>
          <object id="event-background" className="home-backgrounds" type="image/svg+xml" data={eventIllustration}>Your browser does not support svgs.</object>
          <div className="text-box">
            <h1>#NYCEDU Events</h1>
            <p>We are a community of teachers, technologists, advocates, and administrators.</p>
            <p>We can do more and do better, together.</p>
          </div>
          <RaisedButton label="see our events" className="see-our" href="/events" />
        </Section>
        <Section className="organizations" zIndex={1} backgroundColor='#dcedc8' position={this.state.pos4}>
          <object id="organizations-background" className="home-backgrounds" type="image/svg+xml" data={organizationsIllustration}>Your browser does not support svgs.</object>
          <div className="text-box">
            <h1>#NYCEDU Organizations</h1>
            <p>We are a community of teachers, technologists, advocates, and administrators.</p>
            <p>We can do more and do better, together.</p>
          </div>
          <RaisedButton label="see our organizations" className="see-our" href="/organizations" />
        </Section>
      </div>
    );
  }
}

export default Home;
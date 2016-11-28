import React, { Component } from 'react';
import './Home.css';
import Section from './Section';
import communityIllustration from './community-illustration.svg';
import eventIllustration from './events-illustration.svg';
import organizationsIllustration from './organizations-illustration.svg';
import startupWeekend from './startup_weekend.jpg';
import project1 from './project1.png';

import DocumentTitle from 'react-document-title';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Home extends Component {

  state = {
    pos2: 'relative',
    pos3: 'relative',
    pos4: 'relative',
    intervalId: null
  }

  componentDidMount() {
    if (window.innerHeight >= 750) {
      window.addEventListener('scroll', this.handleScroll);
    }

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
            <p>We’re New Yorkers who harness the power of community to positively impact the education of our city’s children.</p>
          </div>
          <RaisedButton label="see our community" className="see-our" href="/community" />
        </Section>
        <Section className="projects" zIndex={3} backgroundColor='#fff' position={this.state.pos2}>
          <div className="text-box">
            <h1>See Our Initiatives</h1>
            <p>Our community volunteers support initiatives that impact over 500 educators, entrepreneurs, teachers, and students.</p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Paper className="project">
                <img className="project-thumbnail" role="presentation" style={{backgroundImage: 'url(' + startupWeekend + ')' }}/>
                <div className="project-content">
                  <h2>Startup Weekend Education NYC</h2>
                  <p>Startup Weekend Education brings educators, business people, designers, and developers together to collaborative launch tools that reimagine the future of school and education.</p>
                </div>
              </Paper>
            </div>
            <div className="col-sm-6">
              <Paper className="project">
                <img className="project-thumbnail" role="presentation" style={{backgroundImage: 'url(' + project1 + ')' }} />
                <div className="project-content">
                  <h2>Design 4 Impact</h2>
                  <p>D4i is a student-led startup that brings social impact projects to K12 schools via design challenges, an online curriculum, and meetups. It is currently incubated at Avenues: The World School.</p>
                </div>
              </Paper>
            </div>
          </div>
        </Section>
        <Section className="events" zIndex={2} backgroundColor='#607d8b' position={this.state.pos3}>
          <object id="event-background" className="home-backgrounds" type="image/svg+xml" data={eventIllustration}>Your browser does not support svgs.</object>
          <div className="text-box">
            <h1>NYC Education Events</h1>
            <p>Come to one of NYC’s many education events to meet future (or old!) friends and collaborators.</p>
          </div>
          <RaisedButton label="see our events" className="see-our" href="/events" />
        </Section>
        <Section className="organizations" zIndex={1} backgroundColor='#dcedc8' position={this.state.pos4}>
          <object id="organizations-background" className="home-backgrounds" type="image/svg+xml" data={organizationsIllustration}>Your browser does not support svgs.</object>
          <div className="text-box">
            <h1>NYC Education Organizations</h1>
            <p>NYC has the greatest density and number of schools, non-profits, and companies in the country. Take a look at just a snapshot of all the education organizations that call NYC home.</p>
          </div>
          <RaisedButton label="see our organizations" className="see-our" href="/organizations" />
        </Section>
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import './Home.css';
import Section from './Section';
import communityIllustration from './community-illustration.svg';
import eventIllustration from './events-illustration.svg';
import organizationsIllustration from './organizations-illustration.svg';
import frontier2018 from './frontier2018.jpg';
import asid from './asid.jpg';
import Card from 'material-ui/Card';
import SignupForm from '../shared/SignupForm'

import DocumentTitle from 'react-document-title';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Home extends Component {

  state = {
    pos2: 'relative',
    pos3: 'relative',
    pos4: 'relative',
    pos5: 'relative',
    intervalId: null
  }

  componentDidMount() {
    if (window.innerHeight >= 600) {
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
    this.setState({pos5: (window.scrollY >= (4*window.innerHeight)) ? 'relative':'fixed'});
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

  handleSubscribe = (msg, color) => {
    this.props.handleToast(msg, color);
  }

  render() {

    return (
      <div style={{height:'500vh'}}>
        <DocumentTitle title="Welcome to your community | #NYCEDU" />
        <Section className="community" zIndex={5} backgroundColor="#8bc34a" position='relative'>
          <object id="community-background" className="home-backgrounds" type="image/svg+xml" data={communityIllustration}>Your browser does not support svgs.</object>
          <div className="text-box">
            <h1>#NYCEDU</h1>
            <p>We're New Yorkers working together to equip ALL of our city's young people with the skills, resources, and community supports they need to flourish as happy, engaged, and impactful citizens of the world.</p>
          </div>
          <RaisedButton label="see our community" className="see-our" href="/community" />
        </Section>
        <Section className="projects" zIndex={4} backgroundColor='#fff' position={this.state.pos2}>
          <div className="text-box">
            <h1>See Our Initiatives</h1>
            <p>Our community volunteers support initiatives that impact over 500 educators, entrepreneurs, teachers, and students.</p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Paper className="project">
                <img className="project-thumbnail" role="presentation" style={{backgroundImage: 'url(' + frontier2018 + ')' }}/>
                <div className="project-content">
                  <h2>Frontier 2018</h2>
                  <p>Frontier 2018 is a k-12 education conference that leverages the expertise of NYC's education community to lead effective school reform. The lineup features experts across school leadership, ed-tech, community organizing, entrepreneurial education, and arts activism. Learn more at <a href='https://www.frontier2018.org'>www.frontier2018.org</a>.</p>
                </div>
              </Paper>
            </div>
            <div className="col-sm-6">
              <Paper className="project">
                <img className="project-thumbnail" role="presentation" style={{backgroundImage: 'url(' + asid + ')' }} />
                <div className="project-content">
                  <h2>The Alliance for School Integration and Desegregation</h2>
                  <p>The Alliance for School Integration and Desegregation is a coalition of organizations and individuals dedicated to ending school segregation in New York City. They sponsor <a href='http://bit.ly/nyceducalasid'>#NYCEDU’s School Integration and Desegregation Calendar</a>.</p>
                </div>
              </Paper>
            </div>
          </div>
        </Section>
        <Section className="events" zIndex={3} backgroundColor='#607d8b' position={this.state.pos3}>
          <object id="event-background" className="home-backgrounds" type="image/svg+xml" data={eventIllustration}>Your browser does not support svgs.</object>
          <div className="text-box">
            <h1>NYC Education Events</h1>
            <p>Come to one of NYC’s many education events to meet future (or old!) friends and collaborators.</p>
          </div>
          <RaisedButton label="see our events" className="see-our" href="/events" />
        </Section>
        <Section className="organizations" zIndex={2} backgroundColor='#dcedc8' position={this.state.pos4}>
          <object id="organizations-background" className="home-backgrounds" type="image/svg+xml" data={organizationsIllustration}>Your browser does not support svgs.</object>
          <div className="text-box">
            <h1>NYC Education Organizations</h1>
            <p>NYC has the greatest density and number of schools, non-profits, and companies in the country. Take a look at just a snapshot of all the education organizations that call NYC home.</p>
          </div>
          <RaisedButton label="see our organizations" className="see-our" href="/organizations" />
        </Section>
        <Section className="contact" zIndex={1} backgroundColor='#fff' position={this.state.pos5}>
          <div className="text-box">
            <h1>Contact Us</h1>
            <p>Need to reach out to someone from #NYCEDU? Send an email to: <a href="mailto:hello@nycedu.org">hello@nycedu.org</a></p>
          </div>
          <Card style={{padding: "25px", margin: "100px auto 100px", maxWidth: "600px"}}>
            <SignupForm handleSubmission={this.handleSubscribe}/>
          </Card>
        </Section >
      </div>
    );
  }
}

export default Home;

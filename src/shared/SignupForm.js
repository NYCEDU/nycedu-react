import React, { Component } from 'react';
import './SignupForm.css';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import illustration from './sign_up_illustration.svg';

import fetchJsonP from 'fetch-jsonp'

class SignupForm extends Component {

  static defaultProps = {
    displayImage: true
  }

  // Ideal stolen from here: https://stackoverflow.com/questions/8425701/ajax-mailchimp-signup-form-integration
  submit = (e) => {
    e.preventDefault();
    //How do we get the submitted values
    const that = this;
    const url = this.refs.form.action; //Should get action from form
    let email = this.refs.email.input.value;
    email = '&EMAIL=' + encodeURIComponent(email);
    fetchJsonP(url + email, {
      jsonpCallback: 'c'
    })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        if (json.result === 'success'){
          that.props.handleSubmission(json.msg, '#000');
        } else {
          //trigger our inline error message
          //pass in json.result.msg
        }
      })
      .catch(function(error){
        //trigger our inline error message
      });
  }

  render() {
    const displayImage = this.props.displayImage;
    let signupImageElement = displayImage === true ? <img src={illustration} role="presentation" />  : '';
    return (
      <form className="signup"
            ref="form"
            onSubmit={this.submit}
            action="https://nycedu.us3.list-manage.com/subscribe/post-json?u=90a5dc9bbb2a0b4a2c2a306e8&amp;id=f88af4fc14" method="get" >
      {signupImageElement}
        <h2>Join the community!</h2>
        <p>Sign up to stay informed regarding all things education and NYC</p>
        <TextField
          hintText="Enter your email..."
          floatingLabelText="Email"
          type="email"
          id="email"
          name="EMAIL"
          ref="email"
          required={true} />
          <div style={{position: 'absolute', left: '-5000px'}} ariaHidden="true"><input type="text" name="b_90a5dc9bbb2a0b4a2c2a306e8_f88af4fc14" tabIndex="-1" value="" /></div>
        <FlatButton style={{verticalAlign:"4px"}} label="Submit" hoverColor="#80BB41" type="Submit" />
      </form>
    );
  }
}

export default SignupForm;
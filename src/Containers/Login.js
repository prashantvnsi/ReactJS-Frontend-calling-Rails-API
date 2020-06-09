import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import history from './../history';

export default class Login extends Component {

  constructor (props) {
    super(props);
    /*this.state = {
      email: '',
      password: ''
      }*/
      this.handleSubmit = this.handleSubmit.bind(this);
      this.email = React.createRef();
      this.password = React.createRef()
  }

  /*handleChange(event) {
    this.setState({email: event.target.email});
    this.setState({password: event.target.password});
  }*/

  handleSubmit(event) {
    alert('A name was submitted: ' + this.email.current.value + this.password.current.value);
    event.preventDefault();
    //const email = event.state.email
    //const password = event.state.password

    /*fetch('https://sgi-rails.herokuapp.com/user_token', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          auth:{
          email: email,
          password: password
          }
        })
    }).then(res => res.json())
    .then(json => 
         console.log(json.token),
         //this.context.history.push('/homepage')
    ).catch(error =>
         console.log(error.response)
    )*/
  
    fetch("https://sgi-rails.herokuapp.com/user_token", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        auth:{
        email: this.email.current.value,
        password: this.password.current.value
        }
      })
    })
      .then(res => {
        if (res.ok) {
          history.push('/homepage')
          //console.log(res.json())
        } else {
          throw Error(res.statusText);
        }
      })
      .then(json => {
        this.setState({
          isLoaded: true,
          token: json
        });
      })
      .catch(error => console.error(error));
      
  }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               
                <h1>Welcome to SGI World</h1>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email </label>
                    <input type="text" ref={this.email} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" ref={this.password} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block"  value="submit">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }

    
}
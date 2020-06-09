import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import history from './../history';

export default class Home extends Component {

    onSubmit = () => {  
        return  history.push('/sign-in')
    }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>A simple app to track your SGI activities</p>
          <form>
            <Button variant="btn btn-success" onClick={this.onSubmit}>Click button to Logout</Button>
          </form>
        </div>
      </div>
    );
  }
}
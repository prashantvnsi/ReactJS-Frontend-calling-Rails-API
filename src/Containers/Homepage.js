import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import { Link } from 'react-router-dom';
import car from '/Users/ptiwari/sgi-track-people/src/Containers/sgi_Image.jpeg'

export default class Homepage extends Component {

    onSubmit = () => {  
        return  history.push('/sign-in')
    }

  render() {
    return (
        <React.Fragment>
        <header>
        <ul id="headerButtons">
            <li className="navButton"><Link to="">Logout</Link></li>
        </ul>
      </header>
      <div className="Home">
        <div className="lander">
          
          <h1>Home page</h1>
          <p>Track your SGI activities</p>
          <form>
            <Button variant="btn btn-success" onClick={this.onSubmit}>Click to find the regions</Button>
          </form>
          
          
        </div>
        <div  styles={{ backgroundImage:`url(${car})` }}></div>
      </div>
      </React.Fragment>
    );
  }
}
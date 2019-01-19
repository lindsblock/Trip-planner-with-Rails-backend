import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <div style={{textAlign:'center', paddingBottom:'900px'}}>
      <h1 className="name">Lindsay's Vacation Planner</h1>
      <button className="button">
        <a href="/trips">View My Trips</a>
      </button>
      </div>
    )
  }
}


export default Home;

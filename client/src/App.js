import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Trips from './components/Trips/Trips';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import TripForm from './components/TripForm/TripForm';
// import ItemForm from './components/ItemForm/ItemForm';
import TripView from './components/TripView/TripView';


class App extends Component {
  render() {
    return (
      <div >
      <Navbar />
      <div className="background" >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/trips" component={Trips} />
            <Route exact path="/trips/:id" component={TripView} />
          </Switch>
        </div>
    </div>
    );
  }
}

export default App;

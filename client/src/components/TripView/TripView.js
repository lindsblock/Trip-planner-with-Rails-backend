import React from 'react';
import './TripView.css';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';
import FlightForm from '../Forms/FlightForm';
import HotelForm from '../Forms/HotelForm';
import CarRentalForm from '../Forms/CarRentalForm';
import ActivityForm from '../Forms/ActivityForm';


class TripView extends React.Component{
  state = {
    trips:[],
    showFlight: false,
    showHotel: false,
    showCar: false,
    showActivity: false}


  componentDidMount = () => {
    axios.get(`/api/trips/${this.props.match.params.id}`)
    .then(res => this.setState({trips: res.data}))
  }

  toggleFlight = () => {
    // this.setState({showForm: true})
    this.setState( state => {
      return { showFlight: !state.showFlight}
    })
  }
  toggleHotel = () => {
    // this.setState({showForm: true})
    this.setState( state => {
      return { showHotel: !state.showHotel}
    })
  }
  toggleCar= () => {
    // this.setState({showForm: true})
    this.setState( state => {
      return { showCar: !state.showCar}
    })
  }
  toggleActivity = () => {
    // this.setState({showForm: true})
    this.setState( state => {
      return { showActivity: !state.showActivity}
    })
  }



  deleteTrip = (id) => {
    axios.delete(`api/trips/${id}`)
    let trip = {...this.state}
    this.setState({...trip})
  }

  render(){
    const {trips, showFlight, showHotel, showCar, showActivity } = this.state
    return(
      <div>
        <h1 className="headline">You're Going to...{trips.name}!</h1>
        <h2 className="subHeadline">{trips.date}</h2>
        <div className="allCards">
          <div className="card">
            <h1>Flight</h1>
            <table>
              <tbody>
              <tr>
                <th>Airline</th>
                <th>To</th>
                <th>From</th>
                <th>Departs</th>
                <th>Arrives</th>
                <th>Layover</th>
                <th>Confirmation</th>
                <th>Notes</th>
                <th>Price</th>
                <th>Edit/Delete</th>
              </tr>
              <tr>
                <td>Delta</td>
                <td>LIH Kauai</td>
                <td>SLC</td>
                <td>11</td>
                <td>8pm</td>
                <td>Yes</td>
                <td>11111</td>
                <td>None</td>
                <td>$500</td>
                <td>
                  <Icon  style={styles.icons} circular name="edit" size="small" />
                  <Icon style={styles.icons} circular name="delete" size="small" />
                </td>
              </tr>
            </tbody>
            </table>
            <button onClick={this.toggleFlight} className="cardButton" >
              { showFlight ? 'Cancel' : 'Add Flight'}
            </button>
            { this.state.showFlight ? <FlightForm /> : null }
          </div>
          <div className="card">
            <h1>Hotel</h1>
            <table>
              <tbody>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Dates</th>
                <th>Booked Through</th>
                <th>Confrimation</th>
                <th>Price</th>
                <th>Notes</th>
                <th>Edit/Delete</th>
              </tr>
              <tr>
                <td>Delta</td>
                <td>LIH Kauai</td>
                <td>SLC</td>
                <td>11</td>
                <td>8pm</td>
                <td>Yes</td>
                <td>11111</td>
                <td>
                  <Icon  style={styles.icons} circular name="edit" size="small" />
                  <Icon style={styles.icons} circular name="delete" size="small" />
                </td>
              </tr>
            </tbody>
            </table>
              <button onClick={this.toggleHotel} className="cardButton">
                { showHotel ? 'Cancel' : 'Add Hotel'}
              </button>
              { this.state.showHotel ? <HotelForm /> : null }
          </div>
          <div className="card">
            <h1>Car Rental</h1>
            <table>
              <tbody>
              <tr>
                <th>Company</th>
                <th>Location</th>
                <th>Dates</th>
                <th>Booked Through</th>
                <th>Confrimation</th>
                <th>Price</th>
                <th>Notes</th>
                <th>Edit/Delete</th>
              </tr>
              <tr>
                <td>Delta</td>
                <td>LIH Kauai</td>
                <td>SLC</td>
                <td>11</td>
                <td>8pm</td>
                <td>Yes</td>
                <td>11111</td>
                <td>
                  <Icon  style={styles.icons} circular name="edit" size="small" />
                  <Icon style={styles.icons} circular name="delete" size="small" />
                </td>
              </tr>
            </tbody>
            </table>
            <button onClick={this.toggleCar} className="cardButton" >
              { showCar ? 'Cancel' : 'Add Car Rental'}
            </button>
            { this.state.showCar ? <CarRentalForm /> : null }
          </div>
          <div className="card">
            <h1>Activites</h1>
            <table>
              <tbody>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Dates</th>
                <th>Booked Through</th>
                <th>Confrimation</th>
                <th>Price</th>
                <th>Notes</th>
                <th>Edit/Delete</th>
              </tr>
              <tr>
                <td>Delta</td>
                <td>LIH Kauai</td>
                <td>SLC</td>
                <td>11</td>
                <td>8pm</td>
                <td>Yes</td>
                <td>11111</td>
                <td>
                  <Icon  style={styles.icons} circular name="edit" size="small" />
                  <Icon style={styles.icons} circular name="delete" size="small" />
                </td>
              </tr>
              </tbody>
            </table>
            <button onClick={this.toggleActivity} className="cardButton" >
              { showActivity ? 'Cancel' : 'Add An Activity'}
            </button>
            { this.state.showActivity ? <ActivityForm /> : null }
          </div>
        </div>
      </div>
    )

  }
}
 const styles ={
   icons: {
     background: 'rgb(114,175,171)',
     color: 'white',
   }
 }


export default TripView;

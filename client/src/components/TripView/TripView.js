import React from 'react';
// import ItemForm from '../ItemForm/ItemForm';
import './TripView.css';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';
import FlightForm from '../Forms/FlightForm';


class TripView extends React.Component{
  state = { trips:[], showForm: false }

  componentDidMount = () => {
    axios.get(`/api/trips/${this.props.match.params.id}`)
    .then(res => this.setState({trips: res.data}))
  }

  addFlight = () => {
    this.setState({showForm: true})
    console.log(this.state.showForm)
    return (<FlightForm />) ;
  }

  deleteTrip = (id) => {
    axios.delete(`api/trips/${id}`)
    let trip = {...this.state}
    this.setState({...trip})
  }

  render(){
    const {trips} = this.state
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
            <button className="cardButton" onClick={this.addFlight}>Add Flight</button>
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
            <button className="cardButton">Add Hotel</button>
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
            <button className="cardButton">Add Car</button>
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
            <button className="cardButton">Add Activity</button>
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

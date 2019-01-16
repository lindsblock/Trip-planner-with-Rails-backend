import React from 'react';
// import ItemForm from '../ItemForm/ItemForm';
import './TripView.css';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';


class TripView extends React.Component{
  state = { trips:[] }

 //  componenetDidMount() {
 //   if (this.props.id)
 //   this.setState({...this.props})
 // }
  componentDidMount = () => {
    axios.get(`api/trips/${this.props.match.params.id}`)
    .then(res => console.log(res.data))
    // .then(res => this.setState({trips: res.data}))
  }

  render(){
    const {trips} = this.state
    return(
      <div>
        <h1 className="headline">You're Going to...{trips.name}!</h1>
        <h2 className="subHeadline">Date</h2>
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
                  <Icon  style={{background: 'rgb(114, 175, 171)', color:'white'}} circular name="edit" size="small" />
                  <Icon style={{background: 'rgb(114, 175, 171)', color:'white'}} circular name="delete" size="small" />
                </td>
              </tr>
            </tbody>
            </table>
            <button className="cardButton">Add Flight</button>
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
                  <Icon  style={{background: 'rgb(114, 175, 171)', color:'white'}} circular name="edit" size="small" />
                  <Icon style={{background: 'rgb(114, 175, 171)', color:'white'}} circular name="delete" size="small" />
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
                  <Icon  style={{background: 'rgb(114, 175, 171)', color:'white'}} circular name="edit" size="small" />
                  <Icon style={{background: 'rgb(114, 175, 171)', color:'white'}} circular name="delete" size="small" />
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
                  <Icon  style={{background: 'rgb(114, 175, 171)', color:'white'}} circular name="edit" size="small" />
                  <Icon style={{background: 'rgb(114, 175, 171)', color:'white'}} circular name="delete" size="small" />
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



export default TripView;

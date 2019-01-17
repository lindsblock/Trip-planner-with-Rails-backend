import React from 'react';
import './Trips.css';
import TripForm from '../TripForm/TripForm';
import { Container, Card, } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import TripView from '../TripView/TripView';

class Trips extends React.Component {
  state = { showForm: false, trips:[] }

componentDidMount = () => {
  axios.get('api/trips')
  .then(res => this.setState({ trips: res.data }))
}

  showForm = () => {
    return <TripForm submit={this.submit} />
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm}
    })
  }

  submit = (trip) => {
    const { trips } = this.state
    axios.post('/api/trips', {trip})
     .then(res => {
       this.setState({
         trips:[...trips, res.data],
         showForm:false
       })
     })
  }

  showTrips = () => {
    const { trips } = this.state
    return(
      <div className="cards">
        <br />
        {trips.map( (trip) =>
          <Card.Group key={trip.id} stackable centered itemsPerRow={3}>
            <Link to={`/trips/${trip.id}`}>
            <Card style={styles.cards} >
              <Card.Content>
                <Card.Header style={{color:'rgb(114, 175, 171)'}}>{trip.name}</Card.Header>
                <Card.Meta>
                  <span >{trip.date}</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Link>
          </Card.Group>
        )}
      </div>
    )
  }

  render() {
    const { showForm } = this.state;
    return(
      <div >
        <h1 className="headline">Trips</h1>
        <Container textAlign="center">
          <button className="button" onClick={this.toggleForm}>
            { showForm ? 'Cancel' : 'Add A Trip'}
          </button>
          { showForm ? this.showForm() : this.showTrips() }
        </Container>
      </div>
    )
  }
}

 const styles = {
   cards: {
     display:'flex',
     margin:'20px'
   }
 }


export default Trips;

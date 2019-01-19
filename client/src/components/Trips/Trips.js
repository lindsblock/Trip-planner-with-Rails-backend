import React from 'react';
import './Trips.css';
import TripForm from '../TripForm/TripForm';
import { Container, Card, Icon, Divider } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  deleteTrip = (id) => {
    const { trips } = this.state
    axios.delete(`api/trips/${id}`)
    .then( () => {
      this.setState({ trips: trips.filter(t => t.id !== id) })
    })
    // let trip = {...this.state}
    // this.setState({...trip})
  }

  showTrips = () => {
    const { trips } = this.state
    return(
      <div className="cards">
        <br />
        {trips.map( (trip) =>
          <Card.Group key={trip.id} stackable centered itemsPerRow={3}>
            <Card style={styles.cards} >
              <Card.Content>
                <Link
                  style={styles.links} to={`/trips/${trip.id}`}>
                <Card.Header style={{paddingTop:'15px'}}>{trip.name}</Card.Header>
              </Link>
              <Divider hidden />
                <Card.Meta>
                  <span >{trip.date}</span>
                </Card.Meta>
              </Card.Content>
              <div className="buttonDiv">
                <Icon  style={styles.icons} circular name="edit" size="small" />
                <Icon style={styles.icons} onClick={()=> this.deleteTrip(trip.id)} circular name="delete" size="small" />
              </div>
            </Card>
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
   },
   icons: {
     background: 'rgb(114,175,171)',
     color: 'white',
   },
   links: {
     fontSize:'35px',
     fontFamily:'Catamaran',
     color:'rgb(114, 175, 171)',
     fontWeight:'bold'
   }
 }


export default Trips;

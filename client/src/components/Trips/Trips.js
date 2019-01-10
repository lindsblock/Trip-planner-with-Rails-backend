import React from 'react';
import './Trips.css';
import TripForm from '../TripForm/TripForm';
import { Container, Table } from 'semantic-ui-react';
import axios from '../../axios-trips';

class Trips extends React.Component {
  state = { showForm: false, trips:[] }

  // componentDidMount = () => {
  //   axios.get('/trips.json')
  //   // .then(res => this.setState({ trips: res.data}) )
  //   .then(res => {
  //     const fetchedTrips = [];
  //     for(let key in res.data) {
  //       fetchedTrips.push({
  //         ...res.data[key],
  //         id:key
  //       })
  //     }
  //     this.setState({trips: fetchedTrips})
  //   })
  // }

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
    axios.post('/trips.json', (trip) )
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
      <div>
        <br />
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Dates</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        { trips.map( (t, i) =>
          <Table.Body key={i}>
            <Table.Row>
              <Table.Cell key={t.id}>{t.name}</Table.Cell>
              <Table.Cell key={t.id}>{t.date}</Table.Cell>
            </Table.Row>
          </Table.Body>
        )}
        </Table>
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



export default Trips;

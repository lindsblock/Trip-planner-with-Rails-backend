import React from 'react';
import './TripView.css';
import ItemForm from '../ItemForm/ItemForm';
import { Table, Container } from 'semantic-ui-react';

class TripView extends React.Component{
  state = { showForm: false }

  showForm = () => {
    return <ItemForm />
  }
  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm}
    })
  }
  showTripItems = () => {
    return(
      <div>
        <br />
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Paid</Table.HeaderCell>
                <Table.HeaderCell>Booked Through</Table.HeaderCell>
                <Table.HeaderCell>Confirmation #</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
      </div>
    )
  }

  render() {
    const { showForm } = this.state;
    return(
      <div>
        <h1 className="headline">My Trip To...</h1>
        <Container textAlign="center">
          <button className="button" onClick={this.toggleForm} >
            {showForm ? 'Cancel' : 'Add An Item'}
          </button>
          { showForm ? this.showForm() : this.showTripItems() }
        </Container>
      </div>
    )
  }
}



export default TripView;

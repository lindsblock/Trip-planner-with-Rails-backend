import React from 'react';
import './TripForm.css';
import { Form, Divider } from 'semantic-ui-react';
import axios from '../../axios-trips';


class TripForm extends React.Component {
  state = {
    trip: {
      name: '',
      date: '',
    },
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let trip = {...this.state}
    this.props.submit(trip)
    this.setState({...this.state})
  }

handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value })
}

  render(){
    const { name, date } = this.state
    return(
      <div>
        <div className="formHolder">
          <Form onSubmit={this.handleSubmit} style={{fontSize:'30px'}}>
            <h1 style={{fontSize:'35px'}}>Add A New Trip</h1>
            <Form.Group>
              <Form.Input
                name="name"
                value={name}
                lable="Trip Name"
                onChange={this.onChange}
                placeholder="Name"
              />
              <Form.Input
                name="date"
                value={date}
                lable="Trip Date"
                onChange={this.onChange}
                placeholder="Date"
              />
            </Form.Group>
            <Divider />
            <button className="button">Add Trip</button>
          </Form>
        </div>
      </div>

    )

  }
}

export default TripForm;

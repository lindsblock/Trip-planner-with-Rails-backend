import React from 'react';
import './Forms.css';
import { Form, Divider } from 'semantic-ui-react';
import axios from 'axios';

class FlightForm extends React.Component {
  state = {
    flight: [{
      airline: '',
      // destination: '',
      // origin: '',
      // departs: '',
      // arrives: '',
      // layover: '',
      // confirmation: '',
      // notes: '',
      // price: '',
    }],
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('api/flights', {...this.state})
    .then(res => {
      this.setState({ flight: res.data})
    })


  }

handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value })
}

  render(){
    const { airline, origin, destination, departs, arrives, layover, confirmation, notes, price } = this.state
    return(
      <div>
        <Divider />
        <h1 className="headline">Add A Flight</h1>
        <div className="formHolder">
          <Form style={styles.form} onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                name="airline"
                value={airline}
                label="AIRLINE"
                onChange={this.handleChange}
              />
            </Form.Group>
              {/* <Form.Input
                name="destination"
                value={destination}
                onChange={this.handleChange}
                label="DESTINATION"
              />
              <Form.Input
                name="origin"
                value={origin}
                onChange={this.handleChange}
                label="ORIGIN"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                name="departs"
                value={departs}
                onChange={this.handleChange}
                label="DEPARTS"
              />
              <Form.Input
                name="arrives"
                value={arrives}
                onChange={this.handleChange}
                label="ARRIVES"
              />
              <Form.Input
                name="layover"
                value={layover}
                onChange={this.handleChange}
                label="LAYOVER"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                name="confirmation"
                value={confirmation}
                onChange={this.handleChange}
                label="CONFIRMATION"
              />
              <Form.Input
                name="notes"
                value={notes}
                onChange={this.handleChange}
                label="NOTES"
              />
              <Form.Input
                name="price"
                value={price}
                onChange={this.handleChange}
                label="PRICE"
              />
            </Form.Group> */}
            <button className="cardButton">Submit</button>
          </Form>
        </div>
      </div>
    )
  }
}
const styles = {
  form: {
    fontSize:'20px'
  }
}
export default FlightForm;

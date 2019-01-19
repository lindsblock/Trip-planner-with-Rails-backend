import React from 'react';
import './Forms.css';
import { Form } from 'semantic-ui-react';

class FlightForm extends React.Component {
  state = {
    flight: [{
      airline: '',
      to: '',
      from: '',
      departs: '',
      arrives: '',
      layover: '',
      confirmation: '',
      notes: '',
      price: '',
    }],
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let flight = {...this.state}
    this.props.submit(flight)
    this.setState({...this.state})
  }

handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value })
}

  render(){
    const { airline, to, from, departs, arrives, layover, confirmation, notes, price } = this.state
    return(
        <div className="formHolder">
        <Form style={styles.form} onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              name="airline"
              value={airline}
              label="AIRLINE"
              onChange={this.handleChange}
            />
            <Form.Input
              name="to"
              value={to}
              onChange={this.handleChange}
              label="TO"
            />
            <Form.Input
              name="from"
              value={from}
              onChange={this.handleChange}
              label="FROM"
            />
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
          </Form.Group>
          <button className="button">Submit</button>
        </Form>
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

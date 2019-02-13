import React from 'react';
import './Forms.css';
import { Form, Divider } from 'semantic-ui-react';

class ActivityForm extends React.Component {
  state = {
    hotel: [{
      name: '',
      location: '',
      dates: '',
      bookedThrough: '',
      confirmation: '',
      notes: '',
      price: '',
    }],
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let activity = {...this.state}
    this.props.submit(activity)
    this.setState({...this.state})
  }

handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value })
}

  render(){
    const { name, dates, bookedThrough, location, confirmation, notes, price } = this.state
    return(
      <div>
        <Divider />
        <h1 className="headline">Add An Activity</h1>
        <div className="formHolder">
          <Form style={styles.form} onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                name="name"
                value={name}
                label="NAME"
                onChange={this.handleChange}
              />
              <Form.Input
                name="location"
                value={location}
                onChange={this.handleChange}
                label="LOCATION"
              />
              <Form.Input
                name="dates"
                value={dates}
                onChange={this.handleChange}
                label="DATES"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                name="bookedThrough"
                value={bookedThrough}
                onChange={this.handleChange}
                label="BOOKED THROUGH"
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
            </Form.Group>
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
export default ActivityForm;

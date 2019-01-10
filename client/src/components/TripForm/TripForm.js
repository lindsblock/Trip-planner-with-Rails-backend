import React from 'react';
import './TripForm.css';
import { Form, Divider, Button } from 'semantic-ui-react';


class TripForm extends React.Component {
  state = {
    trip: [{
      name: '',
      date: '',
    }],
  }

  // componentDidMount() {
  //   if (this.props.id)
  //   this.setState({...this.props})
  // }

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
              name="date"
              value={date}
              onChange={this.handleChange}
              label="DEPARTURE DATE"
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
export default TripForm;

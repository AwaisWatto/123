
import React from 'react';
import { useState } from 'react';


class Openai6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: ''
    };
  }


  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit
  handleSubmit = (event) => {
    event.preventDefault();
    const {date, time} = this.state;

    // Add code here to submit the date and time to your database or API
  }

  render() {
    return (
      <form className="mt-5" style={{backgroundColor:'Tomato'}}onSubmit={this.handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={this.state.time} onChange={this.handleChange} />
        </label>
        <button type="submit">Mark Attendance</button>
        console.log(value)
      </form>
    );
  }
}

export default Openai6;


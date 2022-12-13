import React from 'react';

class Openai2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      marked: false
    };
  }

  // This function will be called when the user clicks the "Mark Attendance" button
  markAttendance = () => {
    // Set the state to indicate that attendance has been marked
    this.setState({marked: true});

    // Make a call to the API to save the attendance record to the database
    // Replace 'API_ENDPOINT' with the actual endpoint for the API
    fetch('API_ENDPOINT', {
      method: 'POST',
      body: JSON.stringify({
        date: this.state.date
      })
    })
    .then(response => {
      console.log('Attendance marked successfully');
    })
    .catch(error => {
      console.error('Error marking attendance:', error);
    });
  }

  render() {
    return (
      <div className="mt-5" style={{backgroundColor:'yellow'}}>
        {/* Display the current date and time */}
        <p>Date and Time: {this.state.date.toString()}</p>

        {/* Show the "Mark Attendance" button if attendance hasn't been marked yet */}
        {!this.state.marked && (
          <button onClick={this.markAttendance}>Mark Attendance2</button>
        )}
      </div>
    );
  }
}
export default Openai2;

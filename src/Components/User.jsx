// import React, { useState } from "react";

// function AttendanceList() {
//   const [attendance, setAttendance] = useState([]);

//   function markAttendance(name) {
//     setAttendance([...attendance, name]);
//   }

//   return (
//     <div>
//       <h1>Attendance List</h1>
//       <ul>
//         {attendance.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
//       <button onClick={() => markAttendance("John Doe")}>
//         Mark John Doe as present
//       </button>
//     </div>
//   );
// }

// export default AttendanceList;




// import React from 'react';
// import { useState } from 'react';


// class AttendanceForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: '',
//       time: ''
//     };
//   }


//   handleChange = (event) => {
//     const {name, value} = event.target;
//     this.setState({
//       [name]: value
//     });
//   }
//   handleSubmit
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const {date, time} = this.state;

//     // Add code here to submit the date and time to your database or API
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Date:
//           <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
//         </label>
//         <label>
//           Time:
//           <input type="time" name="time" value={this.state.time} onChange={this.handleChange} />
//         </label>
//         <button type="submit">Mark Attendance</button>
//         console.log()
//       </form>
//     );
//   }
// }

// export default AttendanceForm;

import React, { useState } from 'react';

function AttendanceMarker() {
  const [attended, setAttended] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleClick = () => {
    setAttended(true);
    setDate(new Date());
    setTime(new Date().toLocaleTimeString());

    console.log(`Attendance marked at ${date} at ${time}`);
  }

  return (
    <button onClick={handleClick}>
      Mark Attendance
    </button>
  );
}
export default AttendanceMarker
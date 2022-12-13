import React, { useState } from 'react';
import axios from 'axios';
import { pink } from '@mui/material/colors';

function AttendanceMarker() {
  const [date, setDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function handleMarkAttendance() {
    setIsSubmitting(true);

    axios.post('/api/markAttendance', { date })
      .then(response => {
        setIsSubmitting(true);
        // Do something with the response
      })
      .catch(err => {
        setIsSubmitting(false);
        setError(err);
      });
  }

  return (
    <div style={{backgroundColor:'pink'}}>
      { error && <p>{error.message}</p> }
      <p>Current Date: {date.toLocaleDateString()}</p>
      <p>Current Time: {date.toLocaleTimeString()}</p>
      <button onClick={handleMarkAttendance} disabled={isSubmitting}>
        Mark Attendance 1
      </button>
    </div>
  );
}
export default AttendanceMarker
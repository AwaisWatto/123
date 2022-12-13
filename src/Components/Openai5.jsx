
import React, { useState } from 'react';
import axios from 'axios';

function Openai5() {
  const [attendanceData, setAttendanceData] = useState(null);

  function handleAttendanceMark() {
    // Get the current date and time
    const now = new Date();

    // Save the attendance data in the state
    setAttendanceData({
      date: now.toDateString(),
      time: now.toTimeString()
    });

    // Send a request to the API to save the attendance data in the database
    axios.post('/api/attendance', {
      date: now.toDateString(),
      time: now.toTimeString()
    });
  }

  return (
    <div className="mt-5" style={{backgroundColor:'grey'}}>
      {attendanceData ? (
        <div>
          <p>Attendance marked at {attendanceData.time} on {attendanceData.date}</p>
          <button onClick={handleAttendanceMark}>Mark Attendance6</button>
        </div>
      ) : (
        <button onClick={handleAttendanceMark}>Mark Attendance 5</button>
      )}
    </div>
  );
}
export default Openai5
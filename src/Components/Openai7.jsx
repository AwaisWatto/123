import React, { useState } from "react";

function Openai7() {
  const [attendance, setAttendance] = useState([]);

  function markAttendance(name) {
    setAttendance([...attendance, name]);
  }

  return (
    <div className="mt-5" style={{backgroundColor:'pink'}}>
      <h1>Attendance List</h1>
      <ul>
        {attendance.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={() => markAttendance("John Doe")}>
        Mark John Doe as present
      </button>
    </div>
  );
}

export default Openai7;




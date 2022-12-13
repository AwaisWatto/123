import React, { useState } from 'react';

function Openai3() {
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
    <div className="mt-5" style={{backgroundColor:'green'}}>
    <button onClick={handleClick}>
      Mark Attendance 3
    </button>
    </div>
  );
}
export default Openai3
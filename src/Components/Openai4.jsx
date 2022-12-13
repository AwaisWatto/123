
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Openai4 = () => {
  const [showModal, setShowModal] = useState(false);
  const [attended, setAttended] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const markAttendance = () => {
    // API call to mark attendance in database with current date and time
    // ...

    // Show modal message
    setShowModal(true);

    // Log confirmation in console
    console.log('Attendance marked!');

    setAttended(true);
    setDate(new Date());
    setTime(new Date().toLocaleTimeString());

    console.log(`Attendance marked at ${date} at ${time}`);

    
  };



  

  return (
    <div className="mt-5" style={{backgroundColor:'black'}}>
      <Button onClick={markAttendance}>Attendance4</Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Attendance Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Attendance has been marked with the current date and time.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Openai4;

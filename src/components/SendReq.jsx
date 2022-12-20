import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from "react-bootstrap/Col";
import UserRequestModal from './RequestModal';


function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row>
      <Col className='col-3'></Col>
      <Col className='col-5'>
        <div className='mt-3 d-flex justify-content-center'> 
      <Button style={{padding:"1.5rem", width:"16rem"}} variant="primary" onClick={handleShow}><h3>
        Send Request</h3>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <UserRequestModal />
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </Col>
      <Col></Col>
    </Row>


);
}

export default MyModal;


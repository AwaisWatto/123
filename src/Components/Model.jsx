import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserLogin from './Parent';
import Col from "react-bootstrap/Col";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RequestTable from './RequestTable';




function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
    <Row className="mt-5">
        <Col> 
      <Button variant="secondary" onClick={handleShow}>
        Send Request
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <UserLogin/>
            

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
      </Col>
    </Row>

    <Row> 

    <Tabs 
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
     className="mt-5">
      <Tab variant="primary" eventKey="home" title="Pending">

        <RequestTable/> 
      </Tab>

      
      <Tab eventKey="profile" title="Approved">  

       <RequestTable/>      
      </Tab>
      <Tab eventKey="longer-tab" title="Rejected">

      <RequestTable/> 
      </Tab>
  
    </Tabs>

    </Row>


    </Container>



  );
}

export default MyModal;
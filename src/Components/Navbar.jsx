import 'bootstrap/dist/css/bootstrap.min.css';
import {  Link } from "react-router-dom";
import { Navbar, Nav, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './Navbar.css';


function Navbar1() {
  return (
    <div>
    <Navbar bg="grey" expand="lg">
      <Navbar> <Link className='pink' to="/">SiteName</Link></Navbar>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Col md={{ span: 3, offset: 3 }}> 
        <Nav className='me-auto '>

          <Nav.Link> <Link className='pink' to="/requesttable">Blog</Link></Nav.Link>
          <Nav.Link ><Link className='pink' to="/About-Us">About Us</Link></Nav.Link>
          <Nav.Link ><Link to="/Contact-US">Contact Us</Link></Nav.Link>
        </Nav>
        </Col>
        <Form inline>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav className="me-auto ">
          <Nav.Link><Link to="/Cart">Cart</Link></Nav.Link>
          <Nav.Link><Link to="/User">User Profile</Link></Nav.Link>
          <Nav.Link><Link to="/">UP</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  </div>
  );
}

export default Navbar1
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserLogin from "./Parent";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RequestTable from "./RequestTable";

function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <div class="container mt-100">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5>Edit row with Click</h5>
                <span>
                  Click on row to perform edit action then Enter for save
                </span>
              </div>
              <div class="card-block">
                <div class="table-responsive">
                  <table
                    class="table table-striped table-bordered"
                    id="example-1"
                  >
                    <thead>
                      <tr>
                        <th style={{ display: "none" }}>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>About</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" style={{ display: "none" }}>
                          1
                        </th>
                        <td
                          class="tabledit-view-mode"
                          style={{ cursor: "pointer" }}
                        >
                          <span class="tabledit-span">Sam</span>
                          <input
                            class="tabledit-input form-control input-sm"
                            type="text"
                            name="First Name"
                            value="Mark"
                            style={{ display: "none" }}
                            disabled
                          />
                        </td>
                        <td
                          class="tabledit-view-mode"
                          style={{ cursor: "pointer" }}
                        >
                          <span class="tabledit-span" style={{}}>
                            Motto
                          </span>
                          <input
                            class="tabledit-input form-control input-sm fill"
                            type="text"
                            name="Last Name"
                            value="Otto
"
                            style={{ display: "none" }}
                          />
                        </td>
                        <td class="tabledit-view-mode">
                          <span class="tabledit-span">Android Developer</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ display: "none" }}>
                          2
                        </th>
                        <td
                          class="tabledit-view-mode"
                          style={{ cursor: "pointer" }}
                        >
                          <span class="tabledit-span">Mark</span>
                          <input
                            class="tabledit-input form-control input-sm"
                            type="text"
                            name="First Name"
                            value="Jacob
"
                            style={{ display: "none" }}
                          />
                        </td>
                        <td
                          class="tabledit-view-mode"
                          style={{ cursor: "pointer" }}
                        >
                          <span class="tabledit-span">Henry</span>
                          <input
                            class="tabledit-input form-control input-sm"
                            type="text"
                            name="Last Name"
                            value="Thorntonkk
"
                            style={{ display: "none" }}
                          />
                        </td>
                        <td class="tabledit-view-mode">
                          <span class="tabledit-span">Java Developer</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" style={{ display: "none" }}>
                          3
                        </th>
                        <td
                          class="tabledit-view-mode"
                          style={{ cursor: "pointer" }}
                        >
                          <span class="tabledit-span">Larry</span>
                          <input
                            class="tabledit-input form-control input-sm"
                            type="text"
                            name="First Name"
                            value="Larry
"
                            style={{ display: "none" }}
                          />
                        </td>
                        <td
                          class="tabledit-view-mode"
                          style={{ cursor: "pointer" }}
                        >
                          <span class="tabledit-span">Pingor</span>
                          <input
                            class="tabledit-input form-control input-sm"
                            type="text"
                            name="Last Name"
                            value="the Bird
"
                            style={{ display: "none" }}
                          />
                        </td>
                        <td class="tabledit-view-mode">
                          <span class="tabledit-span">Hybris Developer</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <UserLogin />
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
          className="mt-5"
        >
          <Tab variant="primary" eventKey="home" title="Pending">
            <RequestTable />
          </Tab>

          <Tab eventKey="profile" title="Approved">
            <RequestTable />
          </Tab>
          <Tab eventKey="longer-tab" title="Rejected">
            <RequestTable />
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}

export default MyModal;

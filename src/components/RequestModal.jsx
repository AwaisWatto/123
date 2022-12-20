import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const UserRequestModal = () => {
  const [validated, setValidated] = useState(false);

  
  const [selectValue, setSelectValue] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (

    

      <Row >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Request Type</Form.Label>
              <Form.Select
                onChange={onChange}
                aria-label="Default select example"
              >
                <option defaultValue>
                  Select Options
                </option>

                <option value="1">Leave</option>
                <option value="2">Salary</option>
                <option value="3">Others</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {selectValue === "1" && (
            <div>
              <Form.Check label="Half Day" className="mb-3" type="radio" name="halfday"/>
              <Form.Check label="Full Day" className="mb-3" type="radio" name="fullday" />
            </div>
          )}

          {selectValue === "2" && (
            <div>
              <Form.Check label="50% Salary" className="mb-3" type="radio" name="talhalawa" />
              <Form.Check label="Full Salary" className="mb-3" type="radio" name="talhalawa" />
            </div>
          )}

{selectValue === "3" && (
            <div>
                  
                        <Form.Label>Custom Request</Form.Label>
                        <Form.Control as="textarea" />
                
            </div>
          )}

          <Form.Group className="mb-3">
            <Form.Check
              required
              label="I solemnly affirm that all the above details are correct"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          {/* <Button type="submit">Apply</Button> */}
        </Form>
      </Row>



  );
};
export default UserRequestModal;

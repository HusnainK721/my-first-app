import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./AllForm.css";
const AllForm = () => {
  return (
    <div>
      <Form>
        {/* First Row */}
        <Row>
          <Col>
            <Form.Label>FirstName</Form.Label>
            <Form.Control />
          </Col>
          <Col>
            <Form.Label>MiddleName</Form.Label>
            <Form.Control />
          </Col>
          <Col>
            <Form.Label>LastName</Form.Label>
            <Form.Control />
          </Col>
        </Row>

        {/* Second Row */}
        <Row>
          <Col>
            <Form.Label>Gender</Form.Label>
            <Form.Control />
          </Col>
          <Col>
            <Form.Label>Age</Form.Label>
            <Form.Control />
          </Col>
          <Col>
            <Form.Label>Cast</Form.Label>
            <Form.Control />
          </Col>
          <Col>
            <Form.Label>Weight</Form.Label>
            <Form.Control />
          </Col>
        </Row>
        {/* ThirdRow */}
        <Row>
          <Col>
            <Form.Label>Permenanat Address</Form.Label>
            <Form.Control />
          </Col>
        </Row>
      </Form>
      {/* Fourth Row */}
      <Row>
        <Col>
          <Form.Label>Mobile No</Form.Label>
          <Form.Control />
        </Col>
        <Col>
          <Form.Label>Education</Form.Label>
          <Form.Control />
        </Col>
        <Col>
          <Form.Label>Additional Skill</Form.Label>
          <Form.Control />
        </Col>
      </Row>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default AllForm;

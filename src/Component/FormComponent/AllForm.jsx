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
    </div>
  );
};

export default AllForm;

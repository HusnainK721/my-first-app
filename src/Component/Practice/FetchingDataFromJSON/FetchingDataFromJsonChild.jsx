import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import "./FetchingDataFromJSON.css";
export const FetchingDataFromJsonChild = ({ itemCurrent }) => {
  console.log("data testing===>", itemCurrent);
  return (
    <div>
      <Row>
        <Card className="testing">
          <Card.Img variant="top" src={itemCurrent.image} alt="image" />
          <Card.Body>
            <Card.Title>{itemCurrent.name}</Card.Title>
            <Card.Text>{itemCurrent.description}</Card.Text>
            <Button variant="primary">Click Me</Button>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

import React from "react";
import { Card, Button } from "react-bootstrap";
export const FetchingDataFromJsonChild = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="Assets/Rose.jpg" />
        <Card.Body>
          <Card.Title>Red Rose</Card.Title>
          <Card.Text>This is red rose tommorow is valentins day</Card.Text>
          <Button variant="primary">Click Me</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Sign_in_passport() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // get form value inside user state
  const getValue = (e) => {
    setUser({
      ...user, // all previous values
      [e.target.name]: e.target.value, // new key:value
    });
  };

  return (
    <Row>
      <Col>
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" />
          </Form.Group>
          <Button variant="success" type="submit">
            Local Sign In
          </Button>
        </Form>
        <Button variant="warning" type="submit">
          facebook LogIn
        </Button>
        <Button variant="primary" type="submit">
          Github Login
        </Button>
      </Col>
    </Row>
  );
}

export default Sign_in_passport;
